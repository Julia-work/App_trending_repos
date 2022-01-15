

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  REPO_PAGE_PATH_NAME,
  DEVELOPERS_PAGE_PATH_NAME
} from "../../constants";
import { getOptionToFetch as  getOptionToFetchDevops} from "../../redux/developers/actionDevelopers";
import { getOptionToFetch as getOptionToFetchRepos} from "../../redux/repos/actionRepos";

import { Autocomplete,TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function AutoBox({filter}) {
  const {label,option,values}= filter

  const dispatch = useDispatch();
  const location = useLocation();

  const pathName = location.pathname;
  const isRepo = pathName === REPO_PAGE_PATH_NAME;

  const store = (isRepo)
    ? useSelector((store) => store.repos)
    : useSelector((store) => store.developers)

  const currentValue = store.options[option]
  const currentLabel = (values.find(item => item.value === currentValue)).label

  const [value, setValue] = useState(currentLabel);

  useEffect(() => {
    const needValue = (values.find(item => item.label === value)).value;
    (isRepo)
      ? dispatch(getOptionToFetchRepos(option, needValue))
      : dispatch(getOptionToFetchDevops(option, needValue))
  }, [value]);

  return (
    <Autocomplete
      disableClearable
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      options={values.map((item)=>item.label)}
      sx={{ width: 150 }}
      renderInput={(params) => <TextField {...params} />}
    />
);
}
