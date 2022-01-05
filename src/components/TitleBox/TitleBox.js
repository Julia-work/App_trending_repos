import React from "react";

import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  titleBox: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(5, 2),
    borderBottom: theme.components.border.main,
    "& h1": {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: "48px",
    },
  },
}));

const TitleBox = (props) => {
  const subTitle = props.subTitle;
  const classes = useStyles();

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
