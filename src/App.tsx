import { ThemeProvider, CssBaseline, Box, Container } from "@mui/material";
import HeroSection from "./components/HeroSection";
import WorkbenchLayout from "./components/layout/WorkbenchLayout";
import { penguinTheme } from "./theme/penguinTheme";

function App() {
  return (
    <ThemeProvider theme={penguinTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container
          maxWidth="lg" // <= keeps everything nicely centered, not too wide
          sx={{
            flex: 1,
            py: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <HeroSection />
          <WorkbenchLayout />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
