import { useEffect, useState } from "react";
import { tokenService } from "@/services/tokenService";
import { API } from "@/pages/team-choice";
import axios from "axios";

export const useSeasons = () => {
  const [seasons, setSeasons] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const token = tokenService.get();
    const fetchSeasons = async () => {
      try {
        const response = await axios.get(`${API}/leagues/seasons`, {
          headers: {
            "x-rapidapi-key": `${token}`,
            "x-rapidapi-host": "v3.football.api-sports.io",
          },
        });
        setSeasons(response.data.response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSeasons();
  }, []);

  return { seasons, loading };
};
