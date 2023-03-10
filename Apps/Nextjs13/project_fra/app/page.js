import style from "./login.module.css"

const user = "testmail@mail.com";
const password = "test";
let IsLogged = false;

export default function Home() {
  if (IsLogged === false) {
    return(
            <div className={style.credentials}>
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
            </div>
    )
  }
  return (
      <main>
         <h1>Success!</h1>
      </main>
  )
}
