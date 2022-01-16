import { DATE_RANGE_LIST } from "./dateRangeList.js";
import { LANGUAGES_LIST } from "./languagesList.js";
import { SPOKEN_LANGUAGES_LIST } from "./spokenLanguagesList.js";

const DATE_FILTER_CONFIG = {
  label: "Date range:",
  option: "since",
  values: DATE_RANGE_LIST,
};

const LANGUAGE_FILTER_CONFIG = {
  label: "Language:",
  option: "language",
  values: LANGUAGES_LIST,
};

const SPOKEN_LANGUAGE_FILTER_CONFIG = {
  label: "Spoken Language:",
  option: "spoken_language_code",
  values: SPOKEN_LANGUAGES_LIST,
};

export {
  DATE_FILTER_CONFIG,
  LANGUAGE_FILTER_CONFIG,
  SPOKEN_LANGUAGE_FILTER_CONFIG,
};
