import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import RepoPage from "../Pages/RepoPage";
import DeveloperPage from "../Pages/DeveloperPage";
import { PATH_NAME } from "../../constants";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH_NAME.repos} element={<RepoPage />} />
        <Route path={PATH_NAME.developers} element={<DeveloperPage />} />
        <Route path="*" element={<Navigate to={PATH_NAME.repos} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
