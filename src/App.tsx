import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Navbar from "./components/Navbar";
import { DialogSearchProvider } from "./components/DialogSearch/DialogSearchProvider";
import theme from "./theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
          <BrowserRouter>
            <DialogSearchProvider>
                <Navbar />
                <AppRouter />
            </DialogSearchProvider>
          </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
