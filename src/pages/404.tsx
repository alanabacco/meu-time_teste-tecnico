import Link from "next/link";
import style from "./../styles/page404.module.css";

export default function Page404(): JSX.Element {
  return (
    <>
      <div className={style.container}>
        <h1>404 - A página que você procura não foi encontrada</h1>
        <Link href="/">Voltar à Página Inicial</Link>
      </div>
    </>
  );
}
