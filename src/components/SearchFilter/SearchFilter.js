

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  REPO_PAGE_PATH_NAME,
  DEVELOPERS_PAGE_PATH_NAME
} from "../../constants";
import { getOptionToFetch as  getOptionToFetchDevops} from "../../redux/developers/actionDevelopers";
import { getOptionToFetch as getOptionToFetchRepos} from "../../redux/repos/actionRepos";

import { Autocomplete,TextField,Box,Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const getStyles = makeStyles((theme) => ({
  inputRoot: {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
  filterWrapper:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&:not(:last-child)":{
      marginRight: 15,
    },
    "& *": {
      color: theme.palette.primary.main,
    },
  },
}));

export default function SearchFilter({filter}) {
  const classes = getStyles();
  const dispatch = useDispatch();
  const location = useLocation();

  const { label, option, values }= filter
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
    <Box className={classes.filterWrapper} >
      <Typography
        variant="span"
        sx={{ color: "primary.main",fontSize:14 }}
      >
        {label}
      </Typography>
      <Autocomplete
        classes={classes}
        disableClearable
        size="small"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        options={values.map((item)=>item.label)}
        sx={{ width: 150 }}
        PaperComponent={({ children }) => (
          <Paper >{children}</Paper>
        )}
        // popoverProps={{ style: { width: 'auto'} }}
        renderInput={(params) => <TextField {...params} />}
      />
    </Box>
);
}
