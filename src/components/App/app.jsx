import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import RepoPage from "../RepoPage";
import DeveloperPage from "../DeveloperPage";
import { ThemeProvider } from "@mui/material";
import theme from "../../stylesGlobal/stylesGlobal";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RepoPage />} />
          <Route path="/developers" element={<DeveloperPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;