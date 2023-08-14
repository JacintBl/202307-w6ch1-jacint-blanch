import { rest } from "msw";
import { apiUrl } from "../hooks/useFilmsApi";
import { mockedFilms } from "./mockedFilms";

export const handlers = [
  rest.get(`${apiUrl}/films`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ results: mockedFilms }));
  }),
];

export const handlersError = [
  rest.get(`${apiUrl}/films`, (_req, res, ctx) => {
    return res(ctx.status(404, "Can't get films"));
  }),
];
