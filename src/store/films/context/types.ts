import { Film } from "../../../types";
export interface FilmContextStructure {
  films: Film[];
  loadFilms: () => Promise<void>;
}
