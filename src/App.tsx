import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import Navigation from './components/Navigation'
import { grey, orange } from '@mui/material/colors'
import Scene from './components/Scene'
import Index from './pages'
import Footer from './components/Footer'
import contents from './static/data/contents'
export const GlobalContext = React.createContext({
  toggleTheme: () => {},
  toggleLanguage: () => {},
  contents,
  english: true
})

export default function App() {
  // Global theme
  const [dark, setDark] = React.useState<boolean>(true)
  const theme = createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
      background: {
        default: dark ? grey[900] : orange[50]
      }
    },
    typography: {
      fontFamily: 'Roboto, ZCOOL KuaiLe'
    }
  })

  // Global language
  const [english, setEnglish] = React.useState<boolean>(true)

  // Global context
  const globalContext = {
    toggleTheme: () => {
      setDark(dark => !dark)
    },
    toggleLanguage: () => {
      setEnglish(english => !english)
    },
    contents,
    english
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
            color: 'text.primary'
          }}
        >
          <BrowserRouter>
            <Navigation />
            <Scene />
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/projects' element={<Index />} />
              <Route path='/posts' element={<Index />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}
