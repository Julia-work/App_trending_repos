import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "../../stylesGlobal/stylesGlobal";
import { CssBaseline } from "@mui/material";
// my components
import RepoPage from "../RepoPage";
import DeveloperPage from "../DeveloperPage";
// constants
import { REPO_PAGE_PATH_NAME, DEVELOPERS_PAGE_PATH_NAME } from "../../constants";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={REPO_PAGE_PATH_NAME} element={<RepoPage />} />
          <Route path={DEVELOPERS_PAGE_PATH_NAME} element={<DeveloperPage />} />
          {/* <Route path={ERROR_PAGE_PATH_NAME} element={<ErrorPage/>} /> */}
          <Route path="*" element={<Navigate to={REPO_PAGE_PATH_NAME} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
