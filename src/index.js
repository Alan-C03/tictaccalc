import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import calculator from './Calculator';
import "./index.css";

import App from "./App";
import Calculator from "./Calculator";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <Calculator />
  </StrictMode>
);