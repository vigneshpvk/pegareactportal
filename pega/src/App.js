import "./App.css";
import { useMode, ColorModeContext, tokens } from "./themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Appbar from "./components/global/Appbar";
import MySideBar from "./components/global/MySideBar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <MySideBar />
          <main className="content">
            <Appbar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
