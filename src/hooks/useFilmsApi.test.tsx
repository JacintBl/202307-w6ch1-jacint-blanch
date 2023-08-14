import { renderHook } from "@testing-library/react";
import { mockedFilms } from "../mocks/mockedFilms";
import useFilmsApi from "./useFilmsApi";

describe("Given a useFilmsApi custom hook", () => {
  describe("When the getFilms function is called", () => {
    test("Then it should return the films", async () => {
      const {
        result: {
          current: { getFilms },
        },
      } = renderHook(() => useFilmsApi());

      const apiFilms = await getFilms();

      expect(apiFilms).toStrictEqual({ results: mockedFilms });
    });
  });
});
