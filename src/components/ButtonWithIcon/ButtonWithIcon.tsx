import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./styles.module.css";

export interface IButtonWithIcon {
  text: string;
  icon: any;
}

export default function ButtonWithIcon({ text, icon }: IButtonWithIcon) {
  const router = useRouter();
  return (
    <>
      <button className={style.button} onClick={() => router.back()}>
        <FontAwesomeIcon icon={icon} className={style.icon} />
        {text}
      </button>
    </>
  );
}
