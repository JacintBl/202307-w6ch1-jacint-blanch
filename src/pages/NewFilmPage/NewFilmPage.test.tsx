import { render, screen } from "@testing-library/react";
import FilmContextProvider from "../../store/films/context/FilmContextProvider";
import NewFilmPage from "./NewFilmPage";

describe("Given a NewFilmPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Añadir nueva película' inside a heading", () => {
      const heading = "Añadir nueva película";

      render(
        <FilmContextProvider>
          <NewFilmPage />
        </FilmContextProvider>,
      );

      const title = screen.getByRole("heading", { name: heading });

      expect(title).toBeInTheDocument();
    });
  });
});
