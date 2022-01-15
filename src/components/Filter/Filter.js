import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { makeStyles } from "@mui/styles";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Box } from "@mui/material";

const getStyles = makeStyles((theme) => ({
  inputWrapper:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover *": {
      color: theme.palette.primary.light,
    },
  },
  buttonOpenInput: {
    padding: 0,
      border: `none !important`,
  },
}));

export default function Filter({ defaultValue, getOptionToFetch, values, label, option }) {
  const classes = getStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    dispatch(getOptionToFetch(option, value));
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.inputWrapper} >
      <Button
        className={classes.buttonOpenInput}
        sx={{ color: "primary.main", border: "none", padding: "4px 0 5px 0" }}
        onClick={handleOpen}
      >
        {label}
      </Button>

      <FormControl variant="standard" sx={{ m: 1 }}>
        <Select
          value={value}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={(event) => handleChange(event)}
        >
          {values.map((item) => (
            <MenuItem key={item.value} value={item.value} >
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
