import style from "./../styles/home.module.css";
import { useRouter } from "next/router";
import { tokenService } from "@/services/tokenService";
import { useState } from "react";

export default function Home() {
  const [token, setToken] = useState("");

  const router = useRouter();

  function handleChange(e: any) {
    const value = e.target.value;
    setToken(value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    tokenService.save(token);
    router.push("/team-choice");
  }

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
            <form action="submit" onSubmit={handleSubmit}>
              <label htmlFor="login">Token: </label>
              <input
                type="password"
                id="login"
                name="login"
                required
                min={10}
                placeholder="token"
                onChange={handleChange}
                className={style.input}
              />
              <button type="submit" className={style.button}>
                Login
              </button>
            </form>
          </main>
        </div>
      </main>
    </>
  );
}
