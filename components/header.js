import styles from '../styles/Home.module.css'

const Header = () => {
    return (
        <header className="banner">
            <div className={styles.mainHeader}>
                <h1 className={styles.title}>Nicromis</h1>
                <h3 className={styles.description}>
                    Мы просто меняем этот мир
                </h3>
            </div>
        </header>
    );
};

export default Header;