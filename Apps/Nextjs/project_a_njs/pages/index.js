import Head from 'next/head'
import style from '@/styles/login.module.css'


export default function Home() {
  return (
      <main className={style.credentials}>
        <Head>
          <title>Proyecto FRA 🤔</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className={style.login_container}>

          <h1 className={style.title}>Project FRA</h1>
          <form className={style.form}>

            <div className={style.field}>
              <input type="email" className={style.input} placeholder=" "/>
              <label htmlFor="email" className={style.label}>Email</label>
            </div>

            <div className={style.field}>
              <input type="password" className={style.input} placeholder=" "/>
              <label htmlFor="password" className={style.label}>Password</label>
            </div>

            <p className={style.forgot_pass_p}>Forgot password?</p>
            <button className={style.button}>{"Log in"}</button>
            <p className={style.not_member_p}>Not a member yet?</p>
            <button className={style.signup_button}>Sing up</button>
          </form>
        </div>
      </main>
  )
}
