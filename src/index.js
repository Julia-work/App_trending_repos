import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./stylesGlobal/stylesGlobal";

import Routing from "./components/Routing";
import ErrorBoundary from "./components/ErrorBoundary";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routing />
      </ThemeProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
