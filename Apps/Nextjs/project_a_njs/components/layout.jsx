import styles from "@/styles/navbar.module.css"
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navsection}>
                    <Link className={styles.navicon} href="/">Home</Link>
                    <Link className={styles.navicon} href="/calendar">Calendar</Link>
                    <Link className={styles.navicon} href="/documents">Documents</Link>
                </div>

                <div className={styles.navsection}>
                    <Link className={styles.navicon} href="/profile">Profile</Link>
                </div>
            </nav>
                {children}
        </>
    )
}