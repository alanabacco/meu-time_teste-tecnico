import Link from "next/link";
import style from "./../styles/home.module.css";

export default function Home() {
  return (
    <>
      <main>
        <div className={style.container}>
          <header className={style.header}>
            <h1>Meu Time</h1>
          </header>
          <main className={style.main}>
            <p>
              Para acessar essa aplicação, você deve criar uma conta na API-Football. Use
              a key de autenticação para fazer o login.
            </p>
            <form action="submit">
              <label htmlFor="login">Token: </label>
              <input
                type="password"
                id="login"
                name="login"
                required
                min={10}
                placeholder="token"
                className={style.input}
              />
              <button type="submit" className={style.button}>
                <Link href="/team-choice">Login</Link>
              </button>
            </form>
          </main>
        </div>
      </main>
    </>
  );
}
