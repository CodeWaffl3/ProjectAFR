import styles from "./loggedin.module.css"
import Link from "next/link";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        {/*
        <head/> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
        <head/>
        <body>
            <nav className={styles.navbar}>
                <div className={styles.navsection}>
                    <Link href="/">Home</Link>
                    <Link href="/calendar">Calendar</Link>
                    <Link href="/documents">Documents</Link>
                </div>

                <div>
                    <Link href="/profile"></Link>
                </div>
            </nav>
            {children}
        </body>
        </html>
    )
}
