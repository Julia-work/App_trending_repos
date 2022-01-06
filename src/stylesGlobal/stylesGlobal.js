import { createTheme } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const colorLightGrey = "#8b949e";
const colorGrey = "#161b22";
const colorDarkGrey = "#0D1117";
const colorBlue = "#1F6FEB";
const colorBorder = "#30363d";

const theme = createTheme({
  palette: {
    primary: {
      main: colorLightGrey,
      light: colorGrey,
      dark: colorDarkGrey,
    },
    secondary: {
      main: colorBlue,
      light: colorBorder,
    },
  },
  typography: {
    fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colorDarkGrey,
          margin: 0,
          color: colorLightGrey,
        },
        a: {
          display: "flex",
        },
      },
    },
    border: {
      main: `1px solid ${colorBorder}`,
      secondary: `1px solid ${colorBlue}`,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          border: `1px solid ${colorBorder}`,
          backgroundColor: colorGrey,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textTransform: "none",
          // backgroundColor: "#1F6FEB",
        },
      },
    },
  },
});
export default theme;
