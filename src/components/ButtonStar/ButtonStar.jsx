import * as React from "react";
// mui components
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
// my components
import ButtonCustom from "../ButtonCustom";
// icons
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ButtonStar = () => {

  return (
    <ButtonGroup variant="contained" size="small" disableElevation >

      <Button>
        <StarOutlineIcon sx={{ fontSize: 16, marginRight: 1 }}/>
        <Typography variant="span">Star</Typography>
      </Button> 

      <Button size="small" sx={{fontSize: 12, padding: "3px 8px", minWidth: 28}} >
        <ArrowDropDownIcon sx={{ width: 16, height: 16}}/>
      </Button>
    </ButtonGroup>
  );
};

export default ButtonStar;
