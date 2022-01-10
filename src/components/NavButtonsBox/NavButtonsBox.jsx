import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Button, ButtonGroup } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  navButtonsBox: {
    "& a": {
      padding: "5px 16px",
      fontWeight: 500,
      lineHeight: "20px",
      "&:not(.active)": {
        borderColor: `${theme.palette.secondary.light} !important`,
        "&:hover": {
          borderColor: `${theme.palette.secondary.buttonHoverBorder} !important`,
        },
      },
      "&.active": {
        backgroundColor: theme.palette.secondary.main,
        borderColor: `${theme.palette.secondary.main} !important`,
        color: "#f0f6fc",
        "&:hover": {
          backgroundColor: "#4c8cef",
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
        <Button
          variant="contained"
          component={NavLink}
          to="/"
        >
          Repositories
        </Button>
        <Button variant="contained" component={NavLink} to="/developers">
          Developers
        </Button>
      </ButtonGroup>
    </nav>
  );
};

export default NavButtonsBox;
