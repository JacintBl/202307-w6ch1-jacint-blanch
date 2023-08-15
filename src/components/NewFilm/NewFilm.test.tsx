import { render, screen } from "@testing-library/react";
import NewFilm from "./NewFilm";

describe("Given a NewFilm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Título:' field, a 'Dirección:' field, a 'Año:' field, and a 'URL cartel:' field", () => {
      const titleInputLabelText = "Título:";
      const directionInputLabelText = "Dirección:";
      const yearInputLabelText = "Año:";
      const urlInputLabelText = "URL cartel:";

      render(<NewFilm />);

      const titleInput = screen.getByLabelText(titleInputLabelText);
      const directionInput = screen.getByLabelText(directionInputLabelText);
      const yearInput = screen.getByLabelText(yearInputLabelText);
      const urlInput = screen.getByLabelText(urlInputLabelText);

      expect(titleInput).toBeInTheDocument();
      expect(directionInput).toBeInTheDocument();
      expect(yearInput).toBeInTheDocument();
      expect(urlInput).toBeInTheDocument();
    });
  });
});
