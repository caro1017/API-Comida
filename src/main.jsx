import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
/* Darle prioridad a los estilos de Tailwind */
import { StyledEngineProvider } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Darle prioridad a los estilos de Tailwind */}
    <StyledEngineProvider>
      <App />
    </StyledEngineProvider>
  </StrictMode>
);
