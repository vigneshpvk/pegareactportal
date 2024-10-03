import "./App.css";
import { useMode, ColorModeContext, tokens } from "./themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Appbar from "./components/global/Appbar";
import MySideBar from "./components/global/MySideBar";
import Routers from "./components/global/Routers";
import { BrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div className="app">
            <MySideBar />
            <main className="content">
              <Appbar />
              <Routers />
            </main>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
