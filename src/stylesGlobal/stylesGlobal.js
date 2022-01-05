import { createTheme } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8b949e", // light-grey 
      light: "#161b22", // color-grey
      dark: "#0D1117", // dark-grey
    },
    secondary: {
      main: "#1F6FEB", // color-blue
      light: "#30363d", // border-bottom
    },
  },
  typography: {
    fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0D1117",
          margin: 0,
          color: "#8b949e",
        },
        a: {
          display: "flex"
        }
      },
    },
    border: {
      main: "1px solid #30363d",
      secondary: "1px solid #1F6FEB",
    },
  },

 
});
export default theme;
