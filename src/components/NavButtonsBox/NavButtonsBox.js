import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Button, ButtonGroup } from "@mui/material";
// constants
import {
  REPO_PAGE_PATH_NAME,
  DEVELOPERS_PAGE_PATH_NAME,
} from "../../constants";

const getStyles = makeStyles((theme) => ({
  navButtonsBox: {
    marginRight: 15,
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
  const classes = getStyles();

  return (
    <nav className={classes.navButtonsBox}>
      <ButtonGroup variant="contained">
        <Button
          variant="contained"
          component={NavLink}
          to={REPO_PAGE_PATH_NAME}>
          Repositories
        </Button>
        <Button
          variant="contained"
          component={NavLink}
          to={DEVELOPERS_PAGE_PATH_NAME}>
          Developers
        </Button>
      </ButtonGroup>
    </nav>
  );
};

export default NavButtonsBox;
