import React from "react";
import { makeStyles } from "@mui/styles";
import { Link, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    fontSize: 20,
    fontWeight: 600,
    paddingRight: 10,
    paddingBottom: 5,
    // wordWrap:"break-word",
    // wordBreak: "break-all"
  },
}));

const CardTitle = ({ url, title,children }) => {
  const classes = useStyles();

  return (
    <Typography variant="h2">
      <Link
        href={url}
        title={title}
        className={classes.cardTitle}
        underline="hover"
        color="secondary.main"
        sx={{wordWrap: "break-word"}}
      >
        {children}
      </Link>
    </Typography>
  );
};
export default CardTitle;
