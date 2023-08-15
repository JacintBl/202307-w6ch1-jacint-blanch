import { X } from "react-feather";
import { Film } from "../../store/types";
import Button from "../Button/Button";
import "./FilmCard.css";

interface CardComponentProps {
  film: Film;
}

const FilmCard = ({
  film: { title, poster, director },
}: CardComponentProps): React.ReactElement => {
  return (
    <article className="film">
      <h3>{title}</h3>
      <img
        className="film__poster"
        src={poster}
        alt="Cartel de 'Viaje a Darjeeling'"
        width="300"
        height="406"
      />
      Dirección: {director}
      <Button className="film__button">
        <X aria-label="eliminar película" />
      </Button>
    </article>
  );
};

export default FilmCard;
