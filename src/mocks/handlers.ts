import { rest } from "msw";
import { mockedFilms } from "./mockedFilms";

export const handlers = [
  rest.get(import.meta.env.VITE_API_FILMS_URL, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ results: mockedFilms }));
  }),
];

export const handlersError = [
  rest.get(import.meta.env.VITE_API_FILMS_URL, (_req, res, ctx) => {
    return res(ctx.status(404, "Can't get films"));
  }),
];
