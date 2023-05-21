import { useEffect, useState } from "react";
import { tokenService } from "@/services/tokenService";
import { API } from "@/pages/team-choice";
import axios from "axios";

export interface ILineup {
  formation: string;
  played: number;
}

export const useLineup = (season: number, teamId: number, leagueId: number) => {
  const [lineup, setLineup] = useState<ILineup>();

  useEffect(() => {
    if (!season && !teamId && !leagueId) return;

    const token = tokenService.get();
    const fetchTeams = async () => {
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
        setLineup(response.data.response.lineups[0]); // ??(response.data.response.lineups[1]
      } catch (error) {
        console.error(error);
      }
    };
    fetchTeams();
  }, [season, teamId, leagueId]);

  return { lineup };
};
