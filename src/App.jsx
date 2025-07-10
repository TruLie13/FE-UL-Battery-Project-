import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import Dashboard from "./components/performanceDashboard/Dashboard.Component";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1a202c", // A dark slate gray
      paper: "#2d3748", // A slightly lighter slate gray for cards
    },
    primary: {
      main: "#63b3ed", // blue
    },
    text: {
      primary: "#e2e8f0", // Light gray for primary text
      secondary: "#a0aec0", // A softer gray for secondary text
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
