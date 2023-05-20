import { useState } from "react";
import style from "./../styles/team-choice.module.css";
import { useCountries } from "@/hooks/useCountries";
import { useLeagues } from "@/hooks/useLeagues";
import { useTeams } from "@/hooks/useTeams";
import { useSeasons } from "@/hooks/useSeasons";

export const API = "https://v3.football.api-sports.io";

export default function TeamChoice() {
  const { countries } = useCountries();
  const [selectedCountry, setSelectedCountry] = useState("");
  const { seasons } = useSeasons();
  const [selectedSeason, setSelectedSeason] = useState(0);
  const { leagues } = useLeagues(selectedCountry);
  const [selectedLeague, setSelectedLeague] = useState(0);
  const { teams } = useTeams(selectedLeague, selectedSeason);
  const [selectedTeam, setSelectedTeam] = useState("");

  const handleCountryChange = (e: any) => {
    setSelectedCountry(e.target.value);
  };

  const handleSeasonChange = (e: any) => {
    setSelectedSeason(e.target.value);
  };

  const handleLeagueChange = (e: any) => {
    setSelectedLeague(e.target.value);
  };

  const handleTeamChange = (e: any) => {
    setSelectedTeam(e.target.value);
  };

  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1>Meu Time</h1>
      </header>
      <main className={style.main}>
        <form action="submit">
          <div>
            <label htmlFor="country">Escolha um país: </label>
            <select
              className={style.input}
              required
              name="country"
              id="country"
              onChange={handleCountryChange}
            >
              <option value="">Escolha um país</option>
              {countries.map((item: any) => {
                return (
                  <option value={item.name} key={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label htmlFor="season">Escolha uma temporada: </label>
            <select
              className={style.input}
              required
              name="season"
              id="season"
              onChange={handleSeasonChange}
            >
              <option value={2023}>2023</option>
              {seasons.map((item: number) => {
                // console.log(seasons);
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label htmlFor="league">Escolha uma liga: </label>
            <select
              className={style.input}
              required
              name="league"
              id="league"
              disabled={!selectedCountry}
              onChange={handleLeagueChange}
            >
              <option value="">Escolha uma liga</option>
              {leagues.map((item: any) => {
                return (
                  <option value={item.league.id} key={item.league.id}>
                    {item.league.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label htmlFor="team">Escolha um time: </label>
            <select
              className={style.input}
              required
              name="team"
              id="team"
              disabled={!selectedLeague && !teams}
              onChange={handleTeamChange}
            >
              <option value="">Escolha um time</option>
              {teams.map((item: any) => {
                return (
                  <option value={item.team.name} key={item.team.id}>
                    {item.team.name}
                  </option>
                );
              })}
            </select>
          </div>
          <br />
          <button className={style.button} disabled={!selectedTeam}>
            Buscar informações
          </button>
        </form>
      </main>
    </div>
  );
}
