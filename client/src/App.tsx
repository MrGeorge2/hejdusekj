import { Layout } from "./components/layout/layout";
import { SnakeGame } from "./components/snakeGame/snake";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from "react";

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
  React.useEffect(() =>{
    console.log(process.env.NODE_ENV);
    console.log(process.env.PUBLIC_URL);
    console.log(process.env.TZ);
  },
  []);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SnakeGame />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
