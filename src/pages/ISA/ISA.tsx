import styles from './ISA.module.css'
import CardList from "../../components/CardList/CardList.tsx";

function ISA() {


    return (
        <main className={styles.content}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
            <CardList data={[
                { content: <p>ISA 1</p> },
                { content: <p>ISA 2</p> },
            ]} />
        </main>
    )
}

export default ISA
