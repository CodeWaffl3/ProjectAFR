import './globals.css'
import styles from "./page.module.css"
import Link from "next/link";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head/>
      <body>
      {children}
      </body>
    </html>
  )
}
