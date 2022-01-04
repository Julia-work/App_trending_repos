import React from "react";
// import { NavLink } from "react-router-dom";
import "./Repo.scss";

const Repo = (props) => {
  const repo = props.repo;
  return (
    <div className="repo">
      <div className="repo-name">{repo.author}</div>
      <a href={repo.repourl} className="repo-link" target="_blank">
        {repo.repourl}
      </a>
    </div>
  );
};
export default Repo;
