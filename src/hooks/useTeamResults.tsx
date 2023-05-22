import { useEffect, useState } from "react";
import { tokenService } from "@/services/tokenService";
import { API } from "@/pages/team-choice";
import axios from "axios";

export interface ITeamResults {
  league: object;
  team: object;
  fixtures: {
    played: { total: number };
    wins: { total: number };
    draws: { total: number };
    loses: { total: number };
  };
  goals: {
    for: { total: { total: number } };
    minute: {
      "0-15": { total: number; porcentage: string };
      "16-30": { total: number; porcentage: string };
      "31-45": { total: number; porcentage: string };
      "61-75": { total: number; porcentage: string };
      "76-90": { total: number; porcentage: string };
      "91-105": { total: number; porcentage: string };
      "106-120": { total: number; porcentage: string };
    };
  };
}

const currentYear = new Date().getFullYear();

export const useTeamResults = (
  teamId: number,
  season = currentYear,
  leagueId: number
) => {
  const [results, setResults] = useState<ITeamResults>();

  useEffect(() => {
    if (!leagueId && !season && !teamId) return;

    const token = tokenService.get();
    const fetch = async () => {
      try {
        const response = await axios.get(
          `${API}/teams/statistics?season=${season}&team=${teamId}&league=${leagueId}`,
          {
            headers: {
              "x-rapidapi-key": `${token}`,
              "x-rapidapi-host": "v3.football.api-sports.io",
            },
          }
        );
        setResults(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, [leagueId, season, teamId]);

  return { results };
};
