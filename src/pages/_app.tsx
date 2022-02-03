import { createContext, useEffect, useState } from 'react'
import { grey, orange } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { Box, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import contents from '../contents'
import '../index.css'
import Scene from '../components/Scene'
import Navigation from '../components/Navigation'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Footer from '../components/Footer'

export const GlobalContext = createContext({
  toggleTheme: () => {},
  toggleLanguage: () => {},
  contents,
  english: true
})

export default function App({ Component, pageProps, router }: AppProps) {
  // Global theme
  const [dark, setDark] = useState<boolean>(true)
  const theme = createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
      background: {
        default: dark ? grey[900] : orange[50],
        paper: dark ? '#191919' : orange[100]
      }
    },
    breakpoints: {
      values: {
        xs: 366,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
      }
    },
    typography: {
      fontFamily: 'Avenir, Helvetica, Arial, sans-serif'
    }
  })

  // Global language
  const [english, setEnglish] = useState<boolean>(
    // /^en\b/.test(navigator.language),
    true
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

  useEffect(() => {
    // update language and theme on load
    setEnglish(!/^zh\b/.test(navigator.language))
    setDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])

  return (
    <>
      <Head>
        {' '}
        <link rel='icon' href='/images/favicon.ico' />
        <meta
          name='description'
          content="Yulei's Homepage. You can find my bio and contact info here, I'll also update my projects and posts here regularly. 小诸的个人主页。这里有我的简介和联系方式，我也会经常在这儿更新自己的文章以及项目。"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <GlobalContext.Provider value={globalContext}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'background.default',
              color: 'text.primary',
              transition: 'all 0.3s linear'
            }}
          >
            <Navigation />
            <Scene />
            <AnimatePresence exitBeforeEnter initial={false}>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
            <Footer />
          </Box>
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  )
}
