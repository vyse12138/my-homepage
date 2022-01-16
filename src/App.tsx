import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import Navigation from './components/Navigation'
import { grey, orange, blueGrey } from '@mui/material/colors'
import Scene from './components/Scene'
import Home from './pages/Home'
import Footer from './components/Footer'
import contents from './static/data/contents'
import Project from './pages/Project'
import Post from './pages/Post'

export const GlobalContext = React.createContext({
  toggleTheme: () => {},
  toggleLanguage: () => {},
  contents,
  english: true
})

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}
export default function App() {
  // Global theme
  const [dark, setDark] = React.useState<boolean>(true)
  const theme = createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
      background: {
        default: dark ? grey[900] : orange[50],
        paper: dark ? '#191919' : orange[100]
      }
    },
    typography: {
      fontFamily: 'Roboto, ZCOOL KuaiLe'
    }
  })

  // Global language
  const [english, setEnglish] = React.useState<boolean>(
    /^en\b/.test(navigator.language)
  )

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
            alignItems: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            transition: 'all 0.3s linear'
          }}
        >
          <BrowserRouter>
            <Navigation />
            <Scene />
            <AnimatedRoutes />
            <Footer />
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}

const AnimatedRoutes = () => (
  <AnimatePresence exitBeforeEnter>
    <Routes location={useLocation()} key={location.pathname}>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Project />} />
      <Route path='/posts' element={<Post />} />
    </Routes>
  </AnimatePresence>
)
