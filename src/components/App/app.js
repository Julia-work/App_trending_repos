import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import DeveloperPage from "../DeveloperPage/DeveloperPage";
import { ThemeProvider } from "@mui/material";
import theme from "../../stylesGlobal/stylesGlobal";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/developers" element={<DeveloperPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
