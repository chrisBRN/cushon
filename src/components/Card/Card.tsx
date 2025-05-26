import styles from './Card.module.css';

function Card({
    children,
    onClick,
}: {
    children: React.ReactNode;
    onClick?: () => void;
}) {
    return (
        <div className={styles.card} onClick={onClick}>
            {children}
        </div>
    );
}

export default Card;
