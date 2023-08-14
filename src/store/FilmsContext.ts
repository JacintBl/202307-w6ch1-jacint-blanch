import { createContext } from "react";
import { Film } from "./types";

export interface FilmContextStructure {
  films: Film[];
  loadFilms: () => Promise<void>;
}

const FilmContext = createContext<FilmContextStructure>(
  {} as FilmContextStructure,
);

export default FilmContext;
