import React from "react";
import ReactDOM from "react-dom/client";

import { Donate } from "./pages/Donate";

import { ThemeProvider } from "styled-components";

import Theme from "./styles/theme";
import GlobalStyles from "./styles/global";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Donate />
    </ThemeProvider>
  </React.StrictMode>
)
