import { createTheme } from "@mui/material";

const colorTextMain = "#8b949e";
const colorTextSecondary = "#c9d1d9";
const colorBackgroundDark = "#0D1117";
const colorBackgroundLight = "#161b22";
const colorBlue = "#1F6FEB";
const colorBorder = "#30363d";
const colorButtonHoverBorder = "#8b949e";
const border = `1px solid ${colorBorder}`;

const theme = createTheme({
  palette: {
    primary: {
      main: colorTextMain,
      light: colorTextSecondary,
      backgroundDark: colorBackgroundDark,
      backgroundLight: colorBackgroundLight,
    },
    secondary: {
      main: colorBlue,
      colorBorder: colorBorder,
      buttonHoverBorder: colorButtonHoverBorder,
    },
  },

  typography: {
    fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colorBackgroundDark,
          margin: 0,
          color: colorTextMain,
        },
        a: {
          display: "flex",
        },
      },
    },
    border: {
      main: border,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          border: border,
          backgroundColor: colorBackgroundLight,
          color: colorTextSecondary,
          lineHeight: "20px",
          "&:hover": {
            backgroundColor: colorBackgroundLight,
            border: `1px solid ${colorButtonHoverBorder}`,
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textTransform: "none",
          textDecoration: "none",
          "&:hover": {
            color: colorBlue,
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {},
        input: {
          color: colorTextMain,
          fontSize: 14,
          fontWeight: 600,
          "&:hover": {
            color: colorTextSecondary,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          width: 200,
          backgroundColor: colorBackgroundLight,
          border: border,
          color: colorTextSecondary,
          fontSize: 12,
          "& li:hover": {
            backgroundColor: colorBlue,
          },
        },
      },
    },
    MuiInputLabel: {
      color: colorBlue,
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: colorBlue,
        },
      },
    },
  },
});
export default theme;
