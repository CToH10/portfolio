import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RoutesProvider } from "./routes";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  window.document.title = "Luís Nunes: Portfolio";
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutesProvider />
    </BrowserRouter>
  );
}

export default App;
