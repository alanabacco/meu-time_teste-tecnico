import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import style from "./styles.module.css";

export default function ButtonWithIcon() {
  const router = useRouter();
  return (
    <>
      <button className={style.button} onClick={() => router.back()}>
        <FontAwesomeIcon icon={faArrowLeft} className={style.icon} />
        Voltar
      </button>
    </>
  );
}
