import { render, screen } from "@testing-library/react";
import FilmsContextProvider from "../../store/films/context/FilmsContextProvider";
import NewFilmPage from "./NewFilmPage";

describe("Given a NewFilmPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Añadir nueva película' inside a heading", () => {
      const heading = "Añadir nueva película";

      render(
        <FilmsContextProvider>
          <NewFilmPage />
        </FilmsContextProvider>,
      );

      const title = screen.getByRole("heading", { name: heading });

      expect(title).toBeInTheDocument();
    });
  });
});
