import { useTeamResults } from "@/hooks/useTeamResults";
import style from "./styles.module.css";

interface IResultsTable {
  season: number;
  teamId: number;
  leagueId: number;
}

export default function ResultsTable({
  season,
  teamId,
  leagueId,
}: IResultsTable): JSX.Element {
  const { results } = useTeamResults(teamId, season, leagueId);

  return (
    <article>
      <h3>Tabela de resultados</h3>
      <table className={style.table}>
        <tbody>
          <tr>
            <td>Total de jogos:</td>
            <td>
              {results?.fixtures.played.total === undefined
                ? "sem informação"
                : results?.fixtures.played.total}
            </td>
          </tr>
          <tr>
            <td>Total de vitórias:</td>
            <td>
              {results?.fixtures.wins.total === undefined
                ? "sem informação"
                : results?.fixtures.wins.total}
            </td>
          </tr>
          <tr>
            <td>Total de empates:</td>
            <td>
              {results?.fixtures.draws.total === undefined
                ? "sem informação"
                : results?.fixtures.draws.total}
            </td>
          </tr>
          <tr>
            <td>Total de derrotas:</td>
            <td>
              {results?.fixtures.loses.total === undefined
                ? "sem informação"
                : results?.fixtures.loses.total}
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
