import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Button, ButtonGroup } from "@mui/material";
import { PATH_NAME } from "../../constants";

const useStyles = makeStyles((theme) => ({
  navButtonsBox: {
    marginRight: 15,
    "& a": {
      padding: "5px 16px",
      fontWeight: 500,
      lineHeight: "20px",
      "&:not(.active)": {
        borderColor: theme.palette.secondary.colorBorder,
        "&:hover": {
          borderColor: theme.palette.secondary.buttonHoverBorder,
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
    <nav>
      <ButtonGroup variant="contained" className={classes.navButtonsBox}>
        <Button variant="contained" component={NavLink} to={PATH_NAME.repos}>
          Repositories
        </Button>
        <Button
          variant="contained"
          component={NavLink}
          to={PATH_NAME.developers}
        >
          Developers
        </Button>
      </ButtonGroup>
    </nav>
  );
};

export default NavButtonsBox;
