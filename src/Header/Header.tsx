import styles from "./Header.module.scss"
export function Header() {
    return (
        <header className={styles.header}>
            <h2 className={styles.header__title}>
                Write mail to me:
            </h2>
        </header>
    )
}