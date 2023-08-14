import "@fontsource/open-sans";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import FilmContextProvider from "./store/FilmContextProvider";
import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FilmContextProvider>
        <App />
      </FilmContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
