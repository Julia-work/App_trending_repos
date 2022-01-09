import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({

}));

const ButtonStar = () => {
  const classes = useStyles();

  return (
    <ButtonGroup variant="contained" size="small" disableElevation >
      <Button sx={{fontSize: 12, padding: "3px 12px" }}>
        <StarOutlineIcon sx={{ fontSize: 16, marginRight: 1 }}/>
        Star
      </Button>
      <Button size="small" sx={{fontSize: 12, padding: "3px 8px", minWidth: 28}} >
        <ArrowDropDownIcon sx={{ width: 16, height: 16}}/>
      </Button>
    </ButtonGroup>
  );
};

export default ButtonStar;
