import { useEffect, useState } from "react";
import { tokenService } from "@/services/tokenService";
import { API } from "@/pages/team-choice";
import axios from "axios";

export interface IPlayers {
  id: number;
  name: string;
  age: number;
  number: number;
  position: string;
  photo: string;
}

export const usePlayers = (teamId: number) => {
  const [players, setPlayers] = useState<IPlayers[]>([]);

  useEffect(() => {
    if (!teamId) return;

    const token = tokenService.get();
    const fetchTeams = async () => {
      try {
        const response = await axios.get(`${API}/players/squads?team=${teamId}`, {
          headers: {
            "x-rapidapi-key": `${token}`,
            "x-rapidapi-host": "v3.football.api-sports.io",
          },
        });
        setPlayers(response.data.response[0].players);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTeams();
  }, [teamId]);

  return { players };
};
