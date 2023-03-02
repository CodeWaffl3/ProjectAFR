import styles from './documents.module.css'
import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.calentest}>
                <h1>Drive</h1>
                <br/>
                <Link href="https://www.google.com/">TEST</Link>
            </div>
        </main>
    )
}