import styles from '@/styles/calendar.module.css'
import Link from "next/link";
import Layout from "@/components/layout.jsx"

export default function Calendar() {
    return (
        <Layout>
            <main className={styles.main}>
                <div className={styles.calentest}>
                    <h1>Calendar</h1>
                    <Link href="https://www.google.com/">Test</Link>
                </div>
            </main>
        </Layout>
    )
}