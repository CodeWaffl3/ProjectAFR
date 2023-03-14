import styles from "@/styles/documents.module.css"
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout"

export default function Documents() {
    return (
        <Layout>
            <main className={styles.main}>
                <div className={styles.calentest}>
                    <h1>Drive</h1>
                    <br/>
                    <Link href="https://www.google.com/">TEST</Link>
                    <Image
                        className={styles.logo}
                        src="/next.svg"
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority
                        style={{backgroundColor: "white", borderStyle: "solid"
                        }}
                    />
                </div>
            </main>
        </Layout>
    )
}