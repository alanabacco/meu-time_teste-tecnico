import { useState } from "react";
import { useRouter } from "next/router";
import { tokenService } from "@/services/tokenService";
import style from "./../styles/home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [token, setToken] = useState("");
  const router = useRouter();

  function handleChange(e: any) {
    const value = e.target.value;
    setToken(value);
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const validate = await tokenService.validate(token);
    if (validate === "no") {
      alert("key de autenticação inválida.");
      return;
    }
    tokenService.save(token);
    router.push("/team-choice");
  }

  return (
    <>
      <main>
        <div className={style.container}>
          <header className={style.header}>
            <Link href={"/"}>
              <h1>Meu Time</h1>
            </Link>
          </header>
          <main className={style.main}>
            <p>
              Para acessar essa aplicação, você deve criar uma conta na{" "}
              <a href="https://www.api-football.com/">API-Football</a>. Use a key de
              autenticação para fazer o login.
            </p>
            <form action="submit" onSubmit={handleSubmit} className={style.form}>
              <label htmlFor="login">Token: </label>
              <input
                type="password"
                id="login"
                name="login"
                required
                placeholder="token"
                onChange={handleChange}
                className={style.input}
              />
              <button type="submit" className={style.button}>
                <FontAwesomeIcon icon={faArrowRightToBracket} className={style.icon} />
                Login
              </button>
            </form>
          </main>
        </div>
      </main>
    </>
  );
}
