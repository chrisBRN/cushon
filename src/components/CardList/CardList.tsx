import styles from './CardList.module.css'
import Card from "../Card/Card.tsx";

type ListItem = {
    content: React.ReactNode;
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
