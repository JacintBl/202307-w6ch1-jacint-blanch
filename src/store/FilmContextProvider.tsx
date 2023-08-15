import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import useFilmsApi from "../hooks/useFilmsApi";
import FilmContext, { FilmContextStructure } from "./FilmsContext";
import { Film } from "./types";

const FilmContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [films, setFilmsList] = useState<Film[]>([]);

  const { getFilms } = useFilmsApi();

  const loadFilms = useCallback(async () => {
    const apiFilms = await getFilms();

    const results = apiFilms;

    setFilmsList([...results]);
  }, [getFilms]);

  const filmsContextValue = useMemo(
    (): FilmContextStructure => ({
      films,
      loadFilms,
    }),
    [films, loadFilms],
  );
  return (
    <FilmContext.Provider value={filmsContextValue}>
      {children}
    </FilmContext.Provider>
  );
};

export default FilmContextProvider;
