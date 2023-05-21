import { useLineup } from "@/hooks/useLineup";
import { usePlayers } from "@/hooks/usePlayers";
import style from "./../styles/team-info.module.css";
import { mockLineup, mockPlayers } from "@/utils/mocks";

interface ITeamInfo {
  teamId: number;
  season: number;
  leagueId: number;
}

export default function TeamInfo({ teamId, season, leagueId }: ITeamInfo): JSX.Element {
  const { players } = usePlayers(teamId);
  const { lineup } = useLineup(season, teamId, leagueId);

  return (
    <section className={style.teamInfoContainer}>
      <h2>Informações sobre o time</h2>
      <h3>Lista de jogadores</h3>
      <div className={style.playersContainer}>
        {mockPlayers.map((item: any) => {
          return (
            <div key={item.id} className={style.card}>
              <p>Nome: {item.name}</p>
              <p>Idade: {item.age}</p>
              <p>Posição: {item.position}</p>
            </div>
          );
        })}
      </div>

      <h3>Formação mais utilizada na temporada</h3>
      <div className={style.formation}>
        <p>• Formação mais utilizada: {mockLineup?.formation}</p>
        <p>• Quantidade de vezes jogada: {mockLineup?.played}</p>
      </div>

      {/* TABELA */}
      <h3>Tabela de resultados</h3>
      <p>- total de jogos - total de vitorias - total de empates - total de derrotas</p>
    </section>
  );
}
