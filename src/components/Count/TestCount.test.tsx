import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { mockedFilms } from "../../mocks/mockedFilms";
import FilmContext from "../../store/FilmsContext";
import Count from "./Count";

describe("Given a Count component", () => {
  describe("When is rendered", () => {
    test("Then it should have a text Listando 4 películas", async () => {
      const length = mockedFilms.length;
      const textCounter = `Listando ${length} películas`;
      const loadFilms = vi.fn();

      render(
        <FilmContext.Provider
          value={{ films: mockedFilms, loadFilms: loadFilms }}
        >
          {<Count />}
        </FilmContext.Provider>,
      );

      const numberFilms = screen.getByText(textCounter);

      expect(numberFilms).toBeInTheDocument();
    });
  });
});
