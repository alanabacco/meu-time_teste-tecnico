import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { tokenService } from "@/services/tokenService";
import { API } from "./team-choice";
import style from "./../styles/home.module.css";

export default function Home() {
  const [token, setToken] = useState("");
  const router = useRouter();

  function handleChange(e: any) {
    const value = e.target.value;
    setToken(value);
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const validate = await validateToken(token);
    console.log("validate", validate);
    if (validate === "no") {
      alert("key de autenticação inválida.");
      return;
    }
    tokenService.save(token);
    router.push("/team-choice");
  }

  async function validateToken(token: string) {
    try {
      const response = await axios.get(`${API}/status`, {
        headers: {
          "x-rapidapi-key": `${token}`,
          "x-rapidapi-host": "v3.football.api-sports.io",
        },
      });
      return !response.data.errors.token ? "yes" : "no";
    } catch (error) {
      console.error(error);
      return "no";
    }
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
