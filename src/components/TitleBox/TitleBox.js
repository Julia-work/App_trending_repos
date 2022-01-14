import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Box } from "@mui/material";

const getStyles = makeStyles((theme) => ({
  titleBox: {
    backgroundColor: theme.palette.primary.backgroundLight,
    padding: theme.spacing(5, 2),
    borderBottom: theme.components.border.main,
    "& h1": {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: "48px",
      color: theme.palette.primary.light,
    },
  },
}));

const TitleBox = ({ subTitle }) => {
  const classes = getStyles();

  return (
    <Box className={classes.titleBox}>
      <Typography variant="h1" align="center">
        Trending
      </Typography>
      <Typography align="center">{subTitle}</Typography>
    </Box>
  );
};

export default TitleBox;
