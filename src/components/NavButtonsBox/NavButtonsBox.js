import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Button, ButtonGroup } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  navButtonsBox: {
    "& a": {
      padding: "5px 16px",
      fontWeight: 500,
      color: theme.palette.primary.main,
      color: "#ffffff",
      lineHeight: "20px",
      backgroundColor: theme.palette.secondary.main,
      border: theme.components.border.secondary,
     
      "&:not(.active)": {
        border: theme.components.border.main,
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,

        "&:hover": {
          backgroundColor: "#1c1a1a",
        },
      },
    },
  },
}));

const NavButtonsBox = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navButtonsBox}>
      <ButtonGroup variant="contained">
        <Button variant="contained" component={NavLink} to="/">
          Repositories
        </Button>
        <Button variant="contained" component={NavLink} to="/developers" >
          Developers
        </Button>
      </ButtonGroup>
    </nav>
  );
};

export default NavButtonsBox;
