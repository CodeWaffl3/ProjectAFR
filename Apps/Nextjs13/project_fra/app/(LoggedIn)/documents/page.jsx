import styles from './documents.module.css'
import Link from "next/link";

export default function Home() {
    return (
        //TODO Poner varias carpetas
        //REPORTES, BItacoras, Articulos de interes, varios
        //TODO Poner,

        <main className={styles.main}>
            <div className={styles.calentest}>
                <h1>Drive</h1>
                <br/>
                <Link href="https://www.google.com/">TEST</Link>
            </div>
        </main>
    )
}