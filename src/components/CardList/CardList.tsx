import styles from './CardList.module.css';
import Card from '../Card/Card.tsx';
import type { ISAItem } from '../../types/types.ts';
import ListItem from '../ListItem/ListItem.tsx';

type Props = {
    data: ISAItem[];
}

function CardList(props: Props) {
    return (
        <ul className={styles.cardList}>
            {props.data.map((item, index) => {
                return (
                    <li key={`isa_item_${index}`} className={styles.listItem}>
                        <Card>
                            <ListItem {...item} />
                        </Card>
                    </li>
                );
            })}
        </ul>
    );
}

export default CardList;
