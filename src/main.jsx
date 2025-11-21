import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer.jsx";
import { Agents } from "./components/Agents/Agents.jsx";
import { Inicio } from "./components/Inicio/Inicio.jsx";
import { Maps } from "./components/Maps/Maps.jsx";
import "./styles/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
