import React from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import NavButtonsBox from "../NavButtonsBox";
import SearchFilter from "../SearchFilter";
import { PATH_NAME, FILTERS_CONFIG } from "../../constants";

const useStyles = makeStyles((theme) => ({
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
  const classes = useStyles();

  const location = useLocation();
  const pathName = location.pathname;
  const isRepo = pathName === PATH_NAME.repos;

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
        {isRepo && <SearchFilter filter={FILTERS_CONFIG.spoken_language} />}
        <SearchFilter filter={FILTERS_CONFIG.language} />
        <SearchFilter filter={FILTERS_CONFIG.dateRange} />
      </Box>
    </Box>
  );
};

export default HeaderContent;
