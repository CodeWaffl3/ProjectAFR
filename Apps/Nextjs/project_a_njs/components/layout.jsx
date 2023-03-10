import styles from "@/styles/navbar.module.css"
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navsection}>
                    <Link href="/">Home</Link>
                    <Link href="/calendar">Calendar</Link>
                    <Link href="/documents">Documents</Link>
                </div>

                <div className={styles.navsection}>
                    <Link href="/profile">Profile</Link>
                </div>
            </nav>
            <div className={styles.content}>
            </div>
            {children}
        </>
    )
}