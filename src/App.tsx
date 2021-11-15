import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import Navigation from './components/Navigation'
import { grey, orange } from '@mui/material/colors'

import Index from './pages/index'
export const GlobalContext = React.createContext({ toggleTheme: () => {} })

export default function App() {
  // Global theme
  const [dark, setDark] = React.useState<boolean>(true)
  const theme = createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
      background: {
        default: dark ? grey[900] : orange[50]
      }
    }
  })

  // Global context
  const globalContext = {
    toggleTheme: () => {
      setDark(dark => !dark)
    }
  }

  return (
    <GlobalContext.Provider value={globalContext}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            height: '100vh'
          }}
        >
          <BrowserRouter>
            <Navigation />
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/projects' element={<Index />} />
              <Route path='/posts' element={<Index />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}
