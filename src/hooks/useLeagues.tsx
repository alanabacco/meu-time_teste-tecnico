import { useEffect, useState } from "react";
import { tokenService } from "@/services/tokenService";
import { API } from "@/pages/team-choice";
import axios from "axios";

export interface ILeague {
  id: number;
  name: string;
  type: string;
  logo: string;
}

export const useLeagues = (country: string) => {
  const [leagues, setLeagues] = useState<ILeague[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!country) return;

    setLoading(true);
    const token = tokenService.get();
    const fetchLeagues = async () => {
      try {
        const response = await axios.get(`${API}/leagues`, {
          params: { country: country.toLowerCase() },
          headers: {
            "x-rapidapi-key": `${token}`,
            "x-rapidapi-host": "v3.football.api-sports.io",
          },
        });
        setLeagues(response.data.response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchLeagues();
  }, [country]);

  return { leagues, loading };
};
