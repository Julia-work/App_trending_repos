import * as React from "react";
import { useState, useEffect } from "react";

import { makeStyles } from "@mui/styles";
import { Button, Box } from "@mui/material";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const getStyles = makeStyles((theme) => ({
  inputWrapper: {
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

export default function SearchFilter({ values, label, defaultValue }) {
  const classes = getStyles();
  // const [value, setValue] = useState(defaultValue);
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  console.log(value);

  const handleChange = (event) => {
    console.log('inputValue',event.target.value);
    setValue(event.target.value);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className={classes.inputWrapper}>
      <Button
        className={classes.buttonOpenInput}
        sx={{ color: "primary.main", border: "none", padding: "4px 0 5px 0" }}
        onClick={handleOpen}>
        {label}
      </Button>

      <Autocomplete
        // sx={{
        //   display: "inline-block",
        //   "& input": {
        //     width: 500,
        //     bgcolor: "primary.backgroundLight",
        //     // border: "none",
        //     // color: (theme) =>
        //     //   theme.palette.getContrastText(theme.palette.background.paper),
        //   },
        // }}
        options={values}
        style={{width: 150}}
        disableClearable
        // value={value}
        // defaultValue={defaultValue}
        // open={open}
        // onOpen={handleOpen}
        // onClose={handleClose}
        onChange={(event) => handleChange(event)}
        renderInput={(params) => (
          <TextField {...params} variant="outlined"/>
        )}
        // getOptionLabel={(option) => option.label}

      />
    </Box>
  );
}

// import InputPicker from "rsuite/SelectPicker";

// const data = [
//   {
//     label: "Eugenia",
//     value: "Eugenia",
//     role: "Master",
//   },
//   {
//     label: "Kariane",
//     value: "Kariane",
//     role: "Master",
//   },
//   {
//     label: "Louisa",
//     value: "Louisa",
//     role: "Master",
//   },
// ];

// export default function SearchFilter() {
//   const styles = { width: 224, display: "block", marginBottom: 10 };
//   const instance = (
//     <div>
//       <InputPicker data={data} style={styles} />
//     </div>
//   );

//   return instance;
// }
