import { API } from "@/pages/team-choice";
import axios from "axios";

const ACCESS_TOKEN = "AT";

export const tokenService = {
  save(accessToken: string) {
    globalThis?.localStorage?.setItem(ACCESS_TOKEN, accessToken);
  },
  get() {
    return localStorage.getItem(ACCESS_TOKEN);
  },
  delete() {
    globalThis?.localStorage?.removeItem(ACCESS_TOKEN);
  },
  
  async validate(token: string) {
    try {
      const response = await axios.get(`${API}/status`, {
        headers: {
          "x-rapidapi-key": `${token}`,
          "x-rapidapi-host": "v3.football.api-sports.io",
        },
      });
      return !response.data.errors.token ? "yes" : "no";
    } catch (error) {
      console.error(error);
      return "no";
    }
  },
};
