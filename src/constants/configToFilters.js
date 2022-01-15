import { SPOKEN_LANGUAGE } from "./spokenLanguageList.js";
import { LANGUAGE } from "./languageList.js";

const ALL_OPTION_FILTERS = "Any";

const DATE_FILTER = {
  label: "Date range:",
  option: "since",
  values: [
    { label: "Today", value: "daily" },
    { label: "This week", value: "weekly" },
    { label: "This month", value: "monthly" },
  ],
};

const LANGUAGE_FILTER = {
  label: "Language:",
  option: "language",
  values: LANGUAGE,
};

const SPOKEN_LANGUAGE_FILTER = {
  label: "Spoken Language:",
  option: "spoken_language_code",
  values: SPOKEN_LANGUAGE,
};

export {
  DATE_FILTER,
  LANGUAGE_FILTER,
  SPOKEN_LANGUAGE_FILTER,
  ALL_OPTION_FILTERS,
};
