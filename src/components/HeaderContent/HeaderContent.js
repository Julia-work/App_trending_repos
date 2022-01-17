import React from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import NavButtonsBox from "../NavButtonsBox";
import SearchFilter from "../SearchFilter";
import {
  REPO_PAGE_PATH_NAME,
  DATE_FILTER_CONFIG,
  LANGUAGE_FILTER_CONFIG,
  SPOKEN_LANGUAGE_FILTER_CONFIG,
} from "../../constants";

const getStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.backgroundLight,
    borderRadius: "6px 6px 0 0",
    borderBottom: theme.components.border.main,
    padding: 16,
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
}));

const HeaderContent = () => {
  const classes = getStyles();

  const location = useLocation();
  const pathName = location.pathname;
  const isRepo = pathName === REPO_PAGE_PATH_NAME;

  return (
    <Box className={classes.header}>
      <NavButtonsBox />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {isRepo && <SearchFilter filter={SPOKEN_LANGUAGE_FILTER_CONFIG} />}
        <SearchFilter filter={LANGUAGE_FILTER_CONFIG} />
        <SearchFilter filter={DATE_FILTER_CONFIG} />
      </Box>
    </Box>
  );
};

export default HeaderContent;
