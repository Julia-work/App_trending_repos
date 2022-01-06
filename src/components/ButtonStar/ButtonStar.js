import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

import { makeStyles } from "@mui/styles";
import { red } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  buttonStarWrapper: {
    "& .buttonStar": {
      backgroundColor: `${theme.palette.secondary.light}`,
    },
  },

  buttonStar: {
    backgroundColor: `${theme.palette.secondary.light}`,
    // textTransform: theme.components.Button,
    padding: `3px 12px  !important`,
    border: `${theme.components.border.main} !important`,
    color: theme.palette.primary.main,
  },
}));

const ButtonStar = () => {
  const classes = useStyles();

  return (
    <ButtonGroup className={classes.buttonStarWrapper} variant="contained">
      <Button className={classes.buttonStar} sx={{ backgroundColor: '#ffffff' }}>
        <StarOutlineIcon />
        Star
      </Button>
      <Button size="small" className={classes.buttonStar} sx={{ backgroundColor: 'secondary.main' }}>
        <ArrowDropDownIcon />
      </Button>
    </ButtonGroup>
  );
};

export default ButtonStar;
