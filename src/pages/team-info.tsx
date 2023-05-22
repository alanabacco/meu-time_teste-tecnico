import { useLineup } from "@/hooks/useLineup";
import { usePlayers } from "@/hooks/usePlayers";
import style from "./../styles/team-info.module.css";
// import { mockLineup, mockPlayers, mockResults } from "@/utils/mocks";
import { useTeamResults } from "@/hooks/useTeamResults";

interface ITeamInfo {
  teamId: number;
  season: number;
  leagueId: number;
}

export default function TeamInfo({ teamId, season, leagueId }: ITeamInfo): JSX.Element {
  const { players } = usePlayers(teamId);
  const { lineup } = useLineup(season, teamId, leagueId);
  const { results } = useTeamResults(teamId, season, leagueId);

  return (
    <section className={style.teamInfoContainer}>
      <h2>Informações sobre o time</h2>
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

      <article>
        {/* GRÁFICO */}
        <h3>Quantidade de gols marcados por tempo de jogo</h3>
      </article>
    </section>
  );
}
