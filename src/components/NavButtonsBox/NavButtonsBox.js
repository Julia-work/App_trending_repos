import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { NoEncryption } from "@mui/icons-material";


const useStyles = makeStyles((theme) => ({
  navButtonsBox: {
    "& a": {
      padding: "5px 16px",
      fontWeight: 500,
      // color: theme.palette.primary.main,
      color: "#ffffff",
      lineHeight: "20px",
      backgroundColor: theme.palette.secondary.main,
      border: theme.components.border.secondary,
      boxShadow: 0,
      textTransform: "none",
      "&:not(.active)": {
        border: theme.components.border.main,
        backgroundColor: theme.palette.primary.light,
        "&:hover": {
          backgroundColor: "#1c1a1a",
        },
      },
    },
    "& a:first-child": {
      borderRadius: "6px 0 0 6px",
    },
    "& a:last-child": {
      borderRadius: "0 6px 6px 0",
    },
  },
}));

const NavButtonsBox = (props) => {
  const subTitle = props.subTitle;
  const classes = useStyles();

  return (
    <nav className={classes.navButtonsBox}>
      <Button variant="contained" component={NavLink} to="/">
        Repositories
      </Button>
      <Button variant="contained" component={NavLink} to="/developers">
        Developers
      </Button>
    </nav>
  );
};

export default NavButtonsBox;
