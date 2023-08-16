import { createContext } from "react";

const FilmContext = createContext<FilmContextStructure>(
  {} as FilmContextStructure,
);

export default FilmContext;
