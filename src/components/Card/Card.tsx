import styles from './Card.module.css'

function Card({
    children,
    onClick,
}: {
    children: React.ReactNode;
    onClick?: () => void;
}) {
    return (
       <button className={styles.card} onClick={onClick}>
           {children}
       </button>
    )
}

export default Card
