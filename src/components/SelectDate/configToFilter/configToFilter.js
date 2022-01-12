/**
 * label
 * values {key:value}
 * defaultValue
 * methodForDispatch
 */

const dateFilter = {
  label: "Date range:",
  option: "since",
  values: [
    { label: "Today", value: "daily" },
    { label: "This week", value: "weekly" },
    { label: "This month", value: "monthly" },
  ],
  defaultValue: "Today",
};
const languageFilter = {
  label: "Language:",
  option: "language",
  values: [
    { label: "Any", value: "" },
    { label: "Java", value: "java" },
    { label: "Javascript", value: "javascript" },
  ],
  defaultValue: "Any",
};
const spokenLanguageFilter = {
  label: "Spoken Language:",
  option: "spoken_language_code",
  values: [
    { label: "Any", value: "" },
    { label: "Java", value: "java" },
    { label: "Javascript", value: "javascript" },
  ],
  defaultValue: "Any",
};

export { dateFilter, languageFilter, spokenLanguageFilter };
