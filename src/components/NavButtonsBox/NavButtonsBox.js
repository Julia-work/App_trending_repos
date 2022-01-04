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
      color: "#C9D1D9",
      lineHeight: "20px",
      border: "0.5px solid #30363d",
      boxShadow: 0,
      textTransform: "none",
      "&:not(.active)": {
        backgroundColor: "#161B22",
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
  button: {
    // padding: 24,
    // backgroundColor: 'red'
    // padding: 5px 16px;
    //   font-weight: 500;
    //   line-height: 20px;
    //   color: var(--color-fg-default);
  },
}));

const NavButtonsBox = (props) => {
  const subTitle = props.subTitle;
  const classes = useStyles();

  return (
    <nav className={classes.navButtonsBox}>
      <Button
        variant="contained"
        component={NavLink}
        to="/"
        className={classes.button}
      >
        Repositories
      </Button>
      <Button
        variant="contained"
        component={NavLink}
        to="/developers"
        className={classes.button}
      >
        Developers
      </Button>
    </nav>
  );
};

export default NavButtonsBox;
