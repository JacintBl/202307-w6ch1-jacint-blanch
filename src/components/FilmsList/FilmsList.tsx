import { useContext } from "react";
import FilmContext from "../../store/FilmsContext";
import FilmCard from "../FilmCard/FilmCard";
import "./FilmsList.css";

const FilmsList = (): React.ReactElement => {
  const { films } = useContext(FilmContext);
  return (
    <ul className="films-list">
      {films.map((film) => (
        <li key={film.id}>
          <FilmCard film={film} />
        </li>
      ))}
    </ul>
  );
};

export default FilmsList;
