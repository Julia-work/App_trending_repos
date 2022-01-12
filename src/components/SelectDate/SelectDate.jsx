import * as React from "react";
import { makeStyles } from "@mui/styles";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  inputWrapper:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover *": {
      color: "#ffffff",
    },
  },
  buttonOpenInput: {
    padding: 0,
    "&:hover": {
      border: `none !important`,
    },
  },
}));

export default function SelectDate({ defaultValue, getOptionToFetch, values, label, option }) {
  const classes = useStyles();
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
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
