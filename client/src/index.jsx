import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Streamer from "./pages/streamer";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:streamerId" element={<Streamer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
