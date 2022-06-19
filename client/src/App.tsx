import { Layout } from "./components/layout/layout";
import { SnakeGame } from "./components/snakeGame/snake";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HomePage } from "./components/homePage/homePage";
import { Games } from "./components/games/games";

const theme = createTheme({
  palette: {
    primary: {
      main: '#393E46',
    },
    secondary: {
      main: '#00ADB5',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      'Inter',
      'system-ui',
      'sans-serif'
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<Games />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
