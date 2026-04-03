import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SuggestionsProvider } from "./contexts/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SuggestionsProvider>
      <App />
    </SuggestionsProvider>
  </React.StrictMode>
);