import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { PATH_NAME } from "../../constants";
import {
  setOptionReposToFetch,
  setOptionDevopsToFetch,
} from "../../redux/actionCreators";
import { Autocomplete, TextField, Box, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const getStyles = makeStyles((theme) => ({
  inputRoot: {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
  filterWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&:not(:last-child)": {
      marginRight: 15,
    },
    "& *": {
      color: theme.palette.primary.main,
    },
  },
}));

export default function SearchFilter({ filter }) {
  const classes = getStyles();
  const dispatch = useDispatch();
  const location = useLocation();

  const { label, option, values } = filter;
  const pathName = location.pathname;
  const isRepo = pathName === PATH_NAME.repos;

  const currentValue = isRepo
    ? useSelector((store) => store.optionsToFetchRepos[option])
    : useSelector((store) => store.optionsToFetchDevelopers[option]);

  const currentLabel = values.find((item) => item.value === currentValue).label;
  const defaultInputWidth = currentLabel.length * 12;

  const [value, setValue] = useState(currentLabel);

  const [inputWidth, setInputWidth] = useState(defaultInputWidth);

  // console.log("defaultInputWidth", defaultInputWidth);
  // console.log("currentLabel", currentLabel);
  // console.log("inputWidth", inputWidth);

  useEffect(() => {
    const needValue = values.find((item) => item.label === value).value;
    setInputWidth(value.length * 12);
    isRepo
      ? dispatch(setOptionReposToFetch(option, needValue))
      : dispatch(setOptionDevopsToFetch(option, needValue));
  }, [value]);

  return (
    <Box className={classes.filterWrapper}>
      <Typography variant="span" sx={{ color: "primary.main", fontSize: 14 }}>
        {label}
      </Typography>
      <Autocomplete
        classes={classes}
        disableClearable
        size="small"
        value={value}
        sx={{ width: 100 }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        options={values.map((item) => item.label)}
        // sx={{ width: "stretch" }}
        // sx={{ width: `${inputWidth}px`, minWidth:`${inputWidth}px` }}
        PaperComponent={({ children }) => <Paper>{children}</Paper>}
        renderInput={(params) => (
          <TextField
            // sx={{ width: `${inputWidth}px`, minWidth:`${inputWidth}px` }}
            {...params}
          />
        )}
      />
    </Box>
  );
}
