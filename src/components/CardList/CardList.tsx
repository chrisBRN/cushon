import styles from './CardList.module.css'
import Card from "../Card/Card.tsx";
import type {JSX} from "react";

export type ListItem = {
    content: string | JSX.Element | JSX.Element[]
}

function CardList({
  data
}: {
    data: ListItem[];
}) {
    return (
        <ul className={styles.cardList}>
            {data.map((item) => {
                return (
                    <li>
                        <Card>
                            {item.content}
                        </Card>
                    </li>
                )
            })}
        </ul>
    )
}

export default CardList
