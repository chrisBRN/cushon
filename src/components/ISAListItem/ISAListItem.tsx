import { type ISAItem, ISAProduct } from '../../types/types.ts';

import styles from './ISAListItem.module.css';

// TODO: refactor, so this is part of a parent or api response (localisation issues aside) rather than in the listItem
const productDetailsMap = {
    [ISAProduct.ISA_1]: {
        name: 'Special ISA',
        notes: ['This ISA is great'],
    },
    [ISAProduct.ISA_2]: {
        name: 'High Interest ISA',
        notes: [],
    },
    [ISAProduct.ISA_3]: {
        name: '2nd Release High Interest',
        notes: ['something interesting about this ISA'],
    },
    [ISAProduct.ISA_4]: {
        name: 'Premium Easy ISA 4',
        notes: ['Best ISA 4 years in a row', '£5 p/m fee', 'Free Netflix'],
    },
};

// TODO: refactor to avoid translations / copy directly in the component (should be passed in)
function ISAListItem(props: ISAItem) {
    const isEasyAccess = props.term === 0;
    const details = productDetailsMap[props.product];

    const onClick = () => {
        // stub for BE request / page navigation
        window.alert('ISA Acquired');
    };

    return (
        <div className={styles.container}>
            <h3>{details.name}</h3>
            <ul className={styles.features}>
                <li>Interest rate {props.rate}%</li>
                {isEasyAccess
                 ? (
                     <li>Easy Access (instant)</li>
                 )
                 : (
                     <li>Investment length {props.term} months</li>
                 )}
                {(details.notes || []).map((note) => <li>{note}</li>)}
            </ul>
            <hr className={styles.spacer}/>
            <button
                className={styles.cta}
                onClick={onClick}
            >
                Open Now
            </button>
        </div>
    );
}

export default ISAListItem;
