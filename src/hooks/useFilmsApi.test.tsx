import { renderHook } from "@testing-library/react";
import { handlersError } from "../mocks/handlers";
import { mockedFilms } from "../mocks/mockedFilms";
import { server } from "../mocks/server";
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

    test("Then it should throw and error when the request fails to get the films from the Api rest", async () => {
      server.resetHandlers(...handlersError);
      const expectedError = new Error("Can't get films");

      const {
        result: {
          current: { getFilms },
        },
      } = renderHook(() => useFilmsApi());

      const apiFilms = getFilms();

      expect(apiFilms).rejects.toThrowError(expectedError);
    });
  });
});
