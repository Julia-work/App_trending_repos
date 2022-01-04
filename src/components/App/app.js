import React from "react";
import "./app.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Main from "../Main/Main";
import DeveloperPage from "../DeveloperPage/DeveloperPage";
import { ThemeProvider, createTheme } from "@mui/material";

const App = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/developers" element={<DeveloperPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
