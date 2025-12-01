import { createTheme } from "@mui/material/styles";

export const penguinTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f7b724ff", // warm accent
    },
    secondary: {
      main: "#1F2933", // dark accent
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F3EF", // warm off-white
    },
    text: {
      primary: "#111827",
      secondary: "#6B7280",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontSize: "2.4rem",
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "0.95rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999, // pill buttons
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});
