import React from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import NavButtonsBox from "../NavButtonsBox";
import Filter from "../Filter";
import {REPO_PAGE_PATH_NAME,DATE_FILTER,LANGUAGE_FILTER,
  SPOKEN_LANGUAGE_FILTER} from  '../../constants'

const getStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.backgroundLight,
    borderRadius: "6px 6px 0 0",
    borderBottom: theme.components.border.main,
    padding: 16,
    display: "flex",
    justifyContent: 'space-between',
    flexWrap: "wrap"
  },
}));

const HeaderContent = ({getOptionToFetch, store}) => {
  const classes = getStyles();

  const location = useLocation()
  const pathName = location.pathname
  const isRepo = pathName === REPO_PAGE_PATH_NAME;

  const {options} = store
  const defaultValueDate = options.since
  const defaultValueLanguage = options.language
  const defaultValueSpokenLanguage = options.spoken_language_code

  return (
    <Box className={classes.header}>
      <NavButtonsBox />
      <Box sx={{display: 'flex', justifyContent: 'space-between', flexWrap: "wrap"}}>
        {isRepo &&  (
          <Filter 
            option={SPOKEN_LANGUAGE_FILTER.option}
            defaultValue = {defaultValueSpokenLanguage} 
            getOptionToFetch={getOptionToFetch}
            values={SPOKEN_LANGUAGE_FILTER.values} 
            label={SPOKEN_LANGUAGE_FILTER.label} 
          />
        )}
        <Filter 
          option={LANGUAGE_FILTER.option} 
          defaultValue = {defaultValueLanguage} 
          getOptionToFetch={getOptionToFetch} 
          values={LANGUAGE_FILTER.values} 
          label={LANGUAGE_FILTER.label} 
        />
        <Filter 
          option={DATE_FILTER.option} 
          defaultValue = {defaultValueDate} 
          getOptionToFetch={getOptionToFetch} 
          values={DATE_FILTER.values} 
          label={DATE_FILTER.label} 
        />
      </Box>
    </Box>
  );
};

export default HeaderContent;
