import { useEffect, useState } from "react";
import { tokenService } from "@/services/tokenService";
import { API } from "@/pages/team-choice";
import axios from "axios";

interface ICountries {
  code: string;
  flag: string;
  name: string;
}

export const useCountries = () => {
  const [countries, setCountries] = useState<ICountries[]>([]);

  useEffect(() => {
    const token = tokenService.get();
    const fetchCountries = async () => {
      try {
        const response = await axios.get(`${API}/countries`, {
          headers: {
            "x-rapidapi-key": `${token}`,
            "x-rapidapi-host": "v3.football.api-sports.io",
          },
        });
        setCountries(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountries();
  }, []);

  return { countries };
};
