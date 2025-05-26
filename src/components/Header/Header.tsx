import styles from './Header.module.css';

function Header({ title }: { title: string }) {
    return (
        <header className={styles.container}>
            <h1>{title}</h1>
        </header>
    );
}

export default Header;
