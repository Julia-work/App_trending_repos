import { DATE_RANGE_LIST } from "./dateRangeList.js";
import { LANGUAGES_LIST } from "./languagesList.js";
import { SPOKEN_LANGUAGES_LIST } from "./spokenLanguagesList.js";

export const FILTERS_CONFIG = {
  dateRange:{
    label: "Date range:",
    option: "since",
    values: DATE_RANGE_LIST,
  },
  language:{
    label: "Language:",
    option: "language",
    values: LANGUAGES_LIST,
  },
  spoken_language:{
    label: "Spoken Language:",
    option: "spoken_language_code",
    values: SPOKEN_LANGUAGES_LIST,
  }
}