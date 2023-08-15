import { useContext } from "react";
import FilmContext from "../../store/FilmsContext";

const Count = (): React.ReactElement => {
  const { films } = useContext(FilmContext);

  return <span className="count">Listando {films.length} películas</span>;
};

export default Count;
