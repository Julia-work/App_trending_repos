import React from "react";

import { makeStyles } from "@mui/styles";
// mui components
import { Box } from "@mui/system";
// my components
import NavButtonsBox from "../NavButtonsBox";
import SelectDate from "../SelectDate";


const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.backgroundLight,
    borderRadius: "6px 6px 0 0",
    borderBottom: theme.components.border.main,
    padding: 16,
    display: "flex",
    justifyContent: 'space-between'
  },
}));

const HeaderContent = ({getOption, defaultValue}) => {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <NavButtonsBox />
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
      <SelectDate defaultValue = {defaultValue} getOption={getOption}/>
      </Box>
    </Box>
  );
};

export default HeaderContent;