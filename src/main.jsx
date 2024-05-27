import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import GlobalStyles from "./Style/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <App />
      <GlobalStyles />
    </>
  </React.StrictMode>
);
