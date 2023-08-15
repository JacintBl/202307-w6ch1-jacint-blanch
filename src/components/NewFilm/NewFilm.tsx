import { useState } from "react";
import Button from "../Button/Button";
import "./NewFilm.css";

const NewFilm = (): React.ReactElement => {
  const initialValue = {
    title: "",
    poster: "",
    director: "",
    year: 0,
  };

  const [newFilm, setNewFilm] = useState(initialValue);

  const [disabled, setDisabled] = useState(true);

  const { title, poster, director, year } = newFilm;

  const submitButton = () => {
    title !== "" && director !== "" && year !== 0 && poster !== ""
      ? setDisabled(false)
      : setDisabled(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewFilm((newFilm) => ({
      ...newFilm,
      [event.target.id]: event.target.value,
    }));
    submitButton();
  };

  return (
    <form className="form-film">
      <div className="form-control">
        <label htmlFor="title">Título: </label>
        <input type="text" onChange={handleChange} value={title} id="title" />
      </div>
      <div className="form-control">
        <label htmlFor="director">Dirección: </label>
        <input
          type="text"
          onChange={handleChange}
          value={director}
          id="director"
        />
      </div>
      <div className="form-control">
        <label htmlFor="year">Año: </label>
        <input type="number" onChange={handleChange} value={year} id="year" />
      </div>
      <div className="form-control">
        <label htmlFor="poster">URL cartel: </label>
        <input type="url" onChange={handleChange} value={poster} id="poster" />
      </div>
      <div className="form-control">
        <Button disabled={disabled}>Crear película</Button>
      </div>
    </form>
  );
};

export default NewFilm;
