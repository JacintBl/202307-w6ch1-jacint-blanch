import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import useFilmsApi from "../../../hooks/useFilmsApi";
import { Film } from "../../../types";
import FilmsContext from "./FilmsContext";
import { FilmContextStructure } from "./types";

const FilmsContextProvider = ({
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
    <FilmsContext.Provider value={filmsContextValue}>
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsContextProvider;
