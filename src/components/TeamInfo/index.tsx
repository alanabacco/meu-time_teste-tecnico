import PlayersList from "./PlayersList";
import Formation from "./Formation";
import ResultsTable from "./ResultsTable";
import GoalsChart from "./GoalsChart";
import style from "./styles.module.css";

interface ITeamInfo {
  teamId: number;
  season: number;
  leagueId: number;
}

export default function TeamInfo({ teamId, season, leagueId }: ITeamInfo): JSX.Element {
  return (
    <section className={style.teamInfoContainer}>
      <h2>Informações sobre o time</h2>

      <PlayersList teamId={teamId} />

      <Formation season={season} teamId={teamId} leagueId={leagueId} />

      <ResultsTable season={season} teamId={teamId} leagueId={leagueId} />

      {/* <GoalsChart season={season} teamId={teamId} leagueId={leagueId} /> */}
    </section>
  );
}
