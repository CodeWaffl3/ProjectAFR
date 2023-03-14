import styles from './calendar.module.css'
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FMexico_City&src=MDIxODc2MkB1cC5lZHUubXg&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=dXAuZWR1Lm14X2NsYXNzcm9vbWJhMWNjNzAzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=dXAuZWR1Lm14X2NsYXNzcm9vbWU5MWI0ZTA2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=dXAuZWR1Lm14X2NsYXNzcm9vbTZjY2QxMjk5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19jbGFzc3Jvb21kNjkwZWE1MkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21jNTdkZDU3Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=dXAuZWR1Lm14X2NsYXNzcm9vbTc4YWY4MDEzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=dXAuZWR1Lm14X2ZsY2xzMjQzYzg5YWF2Zmc1bzlsOGgwc2E4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19jbGFzc3Jvb21iNmViYjczYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21lOTRhMmI2YkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb20zY2I4MzdiMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230047a8&color=%23202124&color=%230047a8&color=%237627bb&color=%230047a8&color=%23202124&color=%23AD1457&color=%23137333&color=%23202124&color=%23202124"
                ></iframe>
        </div>
        // <main className={styles.main}>
        //     <div className={styles.calentest}>
        //         <h1>Calendar</h1>
        //         <p className={styles.test}></p>
        //         <Link href="https://www.google.com/">TEST</Link>
        //     </div>
        //
        // </main>
    )
}
