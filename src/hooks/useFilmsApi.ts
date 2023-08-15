import { useCallback } from "react";
import { Film } from "../types";

export const apiUrl = import.meta.env.VITE_API_FILMS_URL;

const useFilmsApi = () => {
  const getFilms = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl}/films`);
      const apiFilms = (await response.json()) as Film[];

      return apiFilms;
    } catch (error) {
      throw new Error("Can't get films");
    }
  }, []);

  return { getFilms };
};
export default useFilmsApi;
