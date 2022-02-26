import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Navbar from "./components/Navbar";
import theme from "./theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
