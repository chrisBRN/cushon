import styles from './CardList.module.css'
import Card from "../Card/Card.tsx";
import type { ISAListItem } from '../../types/types.ts';


function CardList({
  data
}: {
    data: ISAListItem[];
}) {
    return (
        <ul className={styles.cardList}>
            {data.map((item, index) => {
                return (
                    <li key={`isa_item_${index}`}>
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
