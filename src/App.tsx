import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RoutesProvider } from "./routes";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutesProvider />
    </BrowserRouter>
  );
}

export default App;
