import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@mui/styles";
// mui components
import { Box } from "@mui/system";
// my components
import NavButtonsBox from "../NavButtonsBox";
import SelectDate from "../SelectDate";
import { dateFilter,languageFilter,spokenLanguageFilter } from "../SelectDate/configToFilter";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.backgroundLight,
    borderRadius: "6px 6px 0 0",
    borderBottom: theme.components.border.main,
    padding: 16,
    display: "flex",
    justifyContent: 'space-between'
  },
}));

const HeaderContent = ({getOptionToFetch, optionsToFetch, page}) => {
  
  const defaultValueDate = optionsToFetch.since
  const defaultValueLanguage = optionsToFetch.language
  const defaultValueSpokenLanguage = optionsToFetch.spoken_language_code

  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <NavButtonsBox />
      {page==="repo" ? (
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <SelectDate defaultValue = {defaultValueSpokenLanguage} getOptionToFetch={getOptionToFetch} values={spokenLanguageFilter.values} label={spokenLanguageFilter.label} option={spokenLanguageFilter.option}/>
          <SelectDate defaultValue = {defaultValueLanguage} getOptionToFetch={getOptionToFetch} values={languageFilter.values} label={languageFilter.label} option={languageFilter.option}/>
          <SelectDate defaultValue = {defaultValueDate} getOptionToFetch={getOptionToFetch} values={dateFilter.values} label={dateFilter.label} option={dateFilter.option}/>
        </Box>
      ) : (
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <SelectDate defaultValue = {defaultValueLanguage} getOptionToFetch={getOptionToFetch} values={languageFilter.values} label={languageFilter.label} option={languageFilter.option}/>
          <SelectDate defaultValue = {defaultValueDate} getOptionToFetch={getOptionToFetch} values={dateFilter.values} label={dateFilter.label} option={dateFilter.option}/>
        </Box>
      )}
    </Box>
  );
};


export default HeaderContent;