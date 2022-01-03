import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../actions/repos";
import "./Main.scss";
import Repo from "./Repo/Repo";

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);

  useEffect(() => {
    dispatch(getRepos());
  }, []);

  return (
    <div>
      {repos.map((repo) => (
        <Repo key={repo.repourl} repo={repo} />
      ))}
    </div>
  );
};

export default Main;
