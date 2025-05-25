import styles from './ISA.module.css'
import CardList, {type ListItem} from "../../components/CardList/CardList.tsx";
import {useCallback, useEffect, useState} from "react";
import {isaAPI} from "../../api/isa.ts";
import type {ISAItem} from "../../types/types.ts";

function ISA() {
    const [data, setData] = useState<ISAItem[] | undefined>()

    // Note: this is not the latest way to handle this
    //  we should use 'use', but in the interest of speed this will do
    const fetchData = useCallback(async () => {
        const data = await isaAPI.get();
        // TODO error handling
        // TODO loading
        setData(data);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const parseAPIData = (): ListItem[]  => {
        // validate here
        return (data || []).map((item) => {
            const out: ListItem = {
                content: (
                    <>
                        <p>{item.name}</p>
                        <p>{item.availability}</p>
                        <p>{item.rate}</p>
                        <p>{item.term}</p>
                    </>
                )
            }

            return out;
        })
    }

    return (
        <main className={styles.content}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
            <CardList data={parseAPIData()} />
        </main>
    )
}

export default ISA
