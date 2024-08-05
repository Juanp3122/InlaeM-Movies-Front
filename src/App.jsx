import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './views/Home/Home'
import NavBar from './views/NavBar/NavBar'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material'
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "'Monserrat', sans-serif",
      
        allVariants: {
          color: "#fff"
        }
      
    },
    palette: {
      primary: {
        main: '#FF6600',
        contrastText: '#fff',
        contrastColor: '#f0f0f0'

      },
      secondary: {
        main: '#FF6600'
      },
      background: {
        paper: '#262626', // your color
      },
    },
    background: {
      default: '#32a852'
    },

    shape: {
      borderRadius: 4
    },
    button: {
      textTransform: 'none'
    }
  });

  return (
    <Router>
      <div>
        <ThemeProvider theme={theme}>
          <NavBar></NavBar>
          <Routes>
            <Route exact path="/home" element={<Home />} />

          </Routes>
        </ThemeProvider>
      </div>


    </Router>


  )
}

export default App
