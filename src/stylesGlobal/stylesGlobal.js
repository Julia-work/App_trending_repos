import { createTheme } from "@mui/material";

const colorTextMain = "#8b949e";
const colorTextSecondary = "#c9d1d9";
const colorTextFilterHover = "#ffffff";

const colorBackgroundDark = "#0D1117";
const colorBackgroundLight = "#161b22";

const colorBlue = "#1F6FEB";

const colorBorder = "#30363d";
const colorButtonHoverBorder = "#8b949e";

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
      light: colorBorder,
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
      main: `1px solid ${colorBorder}`,
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          border: `1px solid ${colorBorder}`,
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
          "&:hover": {
            color: colorBlue,
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          minWidth: 45,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: colorTextMain,
          fontSize: 14,
          fontWeight: 600,
          "&:hover": {
            "&:before": {
              border: `none !important`,
            },
          },
          "&:before": {
            border: "none",
          },
          "&:after": {
            border: "none",
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&.MuiSelect-icon": {
            color: colorTextMain,
            "&:hover": {
              color: colorTextFilterHover,
            },
          },
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color:colorBlue,
        },
      },
    }
  },
});
export default theme;
