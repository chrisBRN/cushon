import styles from './Header.module.css';

function Header({ title }: { title: string }) {
    return (
        <header className={styles.bg}>
            <h1>{title}</h1>
        </header>
    );
}

export default Header;
