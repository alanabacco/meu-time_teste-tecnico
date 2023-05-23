import { useLineup } from "@/hooks/useLineup";
import style from "./styles.module.css";

interface IFormation {
  season: number;
  teamId: number;
  leagueId: number;
}

export default function Formation({ season, teamId, leagueId }: IFormation): JSX.Element {
  const { lineup } = useLineup(season, teamId, leagueId);

  return (
    <article>
      <h3>Formação mais utilizada na temporada</h3>
      <div className={style.formation}>
        <p>
          • Formação mais utilizada:{" "}
          {lineup?.formation === undefined ? "sem informação" : lineup?.formation}
        </p>
        <p>
          • Quantidade de vezes jogada:{" "}
          {lineup?.played === undefined ? "sem informação" : lineup?.played}
        </p>
      </div>
    </article>
  );
}
