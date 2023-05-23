import { usePlayers } from "@/hooks/usePlayers";
import style from "./styles.module.css";

interface IPlayersList {
  teamId: number;
}

export default function PlayersList({ teamId }: IPlayersList): JSX.Element {
  const { players } = usePlayers(teamId);

  return (
    <article>
      <h3>Lista de jogadores</h3>
      <div className={style.playersContainer}>
        {players.map((item: any) => {
          return (
            <div key={item.id} className={style.card}>
              <p>Nome: {item.name}</p>
              <p>Idade: {item.age}</p>
              <p>Posição: {item.position}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
}
