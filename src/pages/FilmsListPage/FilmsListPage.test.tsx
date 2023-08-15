import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../../components/App/App";
import FilmContextProvider from "../../store/FilmContextProvider";

describe("Given a FilmsListPage component", () => {
  describe("When is rendered", () => {
    test("Then it should show a heading with the text 'Listado de películas'");
    const textHeading = "Listado de películas";

    render(
      <BrowserRouter>
        <FilmContextProvider>
          <App />
        </FilmContextProvider>
      </BrowserRouter>,
    );

    const listHeading = screen.getByRole("heading", {
      name: textHeading,
    });

    expect(listHeading).toBeInTheDocument();
  });
});
