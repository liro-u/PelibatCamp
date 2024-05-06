import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PageRatioContextProvider } from "./contexts/PageRatioContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PageRatioContextProvider>
      <App />
    </PageRatioContextProvider>
  </React.StrictMode>
);
