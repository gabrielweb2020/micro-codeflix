import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { DialogSearchProvider } from "./components/DialogSearch/DialogSearchProvider";
import theme from "./theme";
import useIsSmallWindow from "./hooks/useIsSmallWindow";

function Main() {
  const isSmallWindow = useIsSmallWindow();
  return (
    <BrowserRouter>
      <DialogSearchProvider>
          <Navbar />
          <AppRouter />
          {isSmallWindow && <Footer />}
      </DialogSearchProvider>
    </BrowserRouter>
  );
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Main />   
    </MuiThemeProvider>
  );
}

export default App;
