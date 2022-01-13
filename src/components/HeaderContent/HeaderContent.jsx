import React from "react";
import { useLocation } from "react-router-dom";

import { makeStyles } from "@mui/styles";
// mui components
import { Box } from "@mui/system";
// my components
import NavButtonsBox from "../NavButtonsBox";
import Filter from "../Filter";
// constants
import {REPO_PAGE_PATH_NAME, DEVELOPERS_PAGE_PATH_NAME,DATE_FILTER,LANGUAGE_FILTER,
  SPOKEN_LANGUAGE_FILTER} from  '../../constants'


const useStyles = makeStyles((theme) => ({
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
  const classes = useStyles();

  const location = useLocation()
  const pathName = location.pathname

  const {options} = store
  const defaultValueDate = options.since
  const defaultValueLanguage = options.language
  const defaultValueSpokenLanguage = options.spoken_language_code

  return (
    <Box className={classes.header}>
      <NavButtonsBox />
      {(() => {
        if(pathName === REPO_PAGE_PATH_NAME) {
          return (
            <Box sx={{display: 'flex', justifyContent: 'space-between', flexWrap: "wrap"}}>
              <Filter option={SPOKEN_LANGUAGE_FILTER.option} defaultValue = {defaultValueSpokenLanguage} getOptionToFetch={getOptionToFetch} values={SPOKEN_LANGUAGE_FILTER.values} label={SPOKEN_LANGUAGE_FILTER.label} />
              <Filter option={LANGUAGE_FILTER.option} defaultValue = {defaultValueLanguage} getOptionToFetch={getOptionToFetch} values={LANGUAGE_FILTER.values} label={LANGUAGE_FILTER.label} />
              <Filter option={DATE_FILTER.option} defaultValue = {defaultValueDate} getOptionToFetch={getOptionToFetch} values={DATE_FILTER.values} label={DATE_FILTER.label} />
            </Box>
          )
        }
        if(pathName === DEVELOPERS_PAGE_PATH_NAME) {
          return (
            <Box sx={{display: 'flex', justifyContent: 'space-between', flexWrap: "wrap"}}>
              <Filter defaultValue = {defaultValueLanguage} getOptionToFetch={getOptionToFetch} values={LANGUAGE_FILTER.values} label={LANGUAGE_FILTER.label} option={LANGUAGE_FILTER.option}/>
              <Filter defaultValue = {defaultValueDate} getOptionToFetch={getOptionToFetch} values={DATE_FILTER.values} label={DATE_FILTER.label} option={DATE_FILTER.option}/>
            </Box>
          )
        }
      })()}
    </Box>
  );
};

export default HeaderContent;

// function unique(arr,key) {
  //   let result = [];
  //   let allValue = arr.map(item => item[key])
  //   for (let value of allValue) {
  //     if (!result.includes(value)) {
  //       result.push(value);
  //     }
  //   }
  //   return result;
  // }
  // const unicLanguage = unique(items, 'language')
  // // ['Python', 'C++', 'Java', 'TeX', 'TypeScript', '', 'PHP', 'Go', 'Lua', 'PowerShell', 'C', 'Jinja', 'Jupyter Notebook', 'C#', 'Batchfile']
  // function setLabeAndValue(arr) {
  //   return arr.map(item => {
  //     return (item.length < 1)? {"label":"Any", "value": "Any"}:{"label":item, "value": item}} )
  // }
  // function setLabeAndValue(arr) {
  //   return arr.map(item => ({"label":item, "value": item}))
  // }
  // const languageValues = setLabeAndValue(unicLanguage)