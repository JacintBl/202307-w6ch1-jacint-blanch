import { render, screen } from "@testing-library/react";
import FilmsList from "../../components/FilmsList/FilmsList";
import { mockedFilms } from "../../mocks/mockedFilms";
import FilmContext from "../../store/FilmsContext";

describe("Given a Film component", () => {
  describe("When it receives a film collection", () => {
    const loadFilms = async () => {};
    test("Then it should show in the second film a header 'Moonlight'", () => {
      render(
        <FilmContext.Provider
          value={{ films: mockedFilms, loadFilms: loadFilms }}
        >
          {<FilmsList />}
        </FilmContext.Provider>,
      );

      const filmsListSecondHeading = screen.getByRole("heading", {
        name: mockedFilms[1].title,
      });

      expect(filmsListSecondHeading).toHaveTextContent("Moonlight");
    });

    test("Then it should show in the third film a header 'Parásitos'", () => {
      render(
        <FilmContext.Provider
          value={{ films: mockedFilms, loadFilms: loadFilms }}
        >
          {<FilmsList />}
        </FilmContext.Provider>,
      );

      const filmsListSecondHeading = screen.getByRole("heading", {
        name: mockedFilms[2].title,
      });

      expect(filmsListSecondHeading).toHaveTextContent("Parásitos");
    });
  });
});
