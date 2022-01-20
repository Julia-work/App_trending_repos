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

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& input": {
      boxSizing: "border-box",
      height: 40,
    },
  },
  filterWrapper: {
    display: "flex",
    alignItems: "center",
    "&:not(:last-child)": {
      marginRight: 5,
    },
    "& *": {
      color: theme.palette.primary.main,
    },
  },
  textFieldOpen: {
    "& input": {
      border: theme.components.border.main,
      borderRadius: "4px",
    },
  },
}));

export default function SearchFilter({ filter }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();

  const { label, option, values } = filter;
  const pathName = location.pathname;
  const isRepo = pathName === PATH_NAME.repos;

  const currentValue = isRepo
    ? useSelector((store) => store.optionsToFetchRepos[option])
    : useSelector((store) => store.optionsToFetchDevelopers[option]);

  const currentLabel = values.find((item) => item.value === currentValue).label;


  const [value, setValue] = useState(currentLabel);
  const [open, setOpen] = useState(false);

  const stringLength = (textString) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = '14px roboto'

    return context.measureText(textString).width;
  };

  useEffect(() => {
    const needValue = values.find((item) => item.label === value).value;
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
        value={value}
        sx={{ width: 65 + stringLength(value) }}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        options={values.map((item) => item.label)}
        PaperComponent={({ children }) => <Paper>{children}</Paper>}
        renderInput={(params) => (
          <TextField
            className={`${open ? classes.textFieldOpen : ""}`}
            fullWidth
            {...params}
          />
        )}
      />
    </Box>
  );
}
