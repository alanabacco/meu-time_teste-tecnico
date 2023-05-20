import { useEffect, useState } from "react";
import { tokenService } from "@/services/tokenService";
import { API } from "@/pages/team-choice";
import axios from "axios";

export interface ITeam {
  id: number;
  name: string;
  code: string;
  country: string;
  funded: number;
  national: boolean;
  logo: string;
}

const currentYear = new Date().getFullYear();

export const useTeams = (leagueId: number, season = currentYear) => {
  const [teams, setTeams] = useState<ITeam[]>([]);

  useEffect(() => {
    if (!leagueId) return;

    const token = tokenService.get();
    const fetchTeams = async () => {
      try {
        const response = await axios.get(
          `${API}/teams?league=${leagueId}&season=${season}`,
          {
            headers: {
              "x-rapidapi-key": `${token}`,
              "x-rapidapi-host": "v3.football.api-sports.io",
            },
          }
        );
        setTeams(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTeams();
  }, [leagueId, season]);

  return { teams };
};
