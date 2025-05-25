import styles from './Navigation.module.css'

function Navigation() {
    return (
        <nav className={styles.bg}>
            <a className={styles.logo} href={'https://www.cushon.co.uk'} target="_blank">
                <img src="/cushion.svg" alt="logo" />
                <h1>A Real Cushon Page</h1>
            </a>

            <ul>
                <li><button>Login</button></li>
                <li><button>Sign Up</button></li>
            </ul>
        </nav>
    )
}

export default Navigation
