import React from "react";
import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import DeveloperPage from "../DeveloperPage/DeveloperPage";

const App = () => {
  
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/developers" element={<DeveloperPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
