import { createContext, useEffect, useState } from 'react'
import { orange } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { Box, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import contents from '../contents'
import '../index.css'
import Navigation from '../components/Navigation'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Footer from '../components/Footer'

export const GlobalContext = createContext({
  toggleTheme: () => {},
  toggleLanguage: () => {},
  contents,
  english: true,
  dark: true
})

export default function App({ Component, pageProps, router }: AppProps) {
  // Global theme
  const [dark, setDark] = useState<boolean>(true)
  const theme = createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
      background: {
        default: dark ? '#000000' : orange[50],
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
    false
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
    english,
    dark
  }

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // @ts-ignore
    import('../bg').then(() => {
      setLoading(false)
    })

    // update language and theme on load, currently disabled
    // setEnglish(!/^zh\b/.test(navigator.language))
  }, [])

  return (
    <>
      <Head>
        <link rel='icon' href='/images/favicon.ico' />
        <meta
          name='description'
          content="Yulei's Homepage. You can find out my bio and contact info here, I'll also update my projects and posts here regularly. 小诸的个人主页。这里有我的简介和联系方式，我也会经常在这儿更新自己的文章以及项目。"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta property='og:title' content="Yulei's Homepage" />
        <meta
          property='og:description'
          content="You can find out my bio and contact info here, I'll also update my projects and posts here regularly."
        />
        <meta
          property='og:image'
          content='https://www.yulei.me/images/index.jpg'
        />
        <meta property='og:url' content='https://yulei.me/' />
      </Head>
      <GlobalContext.Provider value={globalContext}>
        <ThemeProvider theme={theme}>
          <canvas
            style={{
              width: '100%',
              height: '100%',
              zIndex: -1,
              position: 'fixed'
            }}
          ></canvas>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'text.primary',
              transition: 'all 0.3s linear',
              minHeight: '100vh',
              backgroundColor: loading ? 'black' : 'unset'
            }}
          >
            <Navigation />
            <Box sx={{ flexGrow: 1 }}>
              <AnimatePresence exitBeforeEnter initial={false}>
                <Component {...pageProps} key={router.route} />
              </AnimatePresence>
            </Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  )
}
