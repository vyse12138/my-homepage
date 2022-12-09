import { useContext, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GlobalContext } from '../../pages/_app'
import { useTheme } from '@mui/material/styles'
import { Translate, DarkMode, LightMode } from '@mui/icons-material'
import { Box, IconButton, Button, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import AnimateWrapper from '../../components/AnimateWrapper'
import Logo from './src/Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { cyan } from '@mui/material/colors'

export default function Navigation() {
  const path = useRouter().pathname
  const theme = useTheme()
  const globalContext = useContext(GlobalContext)
  const [contents, setContents] = useState(
    globalContext.english
      ? globalContext.contents.english.nav
      : globalContext.contents.chinese.nav
  )

  useEffect(() => {
    setTimeout(() => {
      setContents(
        globalContext.english
          ? globalContext.contents.english.nav
          : globalContext.contents.chinese.nav
      )
    }, 350)
  }, [
    globalContext.contents.chinese.nav,
    globalContext.contents.english.nav,
    globalContext.english
  ])

  return (
    <AnimatePresence initial={false}>
      <Box
        sx={{
          width: '100%',
          position: 'sticky',
          top: '0',
          left: '0',
          backgroundColor: alpha(theme.palette.background.default, 0.6),
          backdropFilter: 'blur(16px)',
          zIndex: '10000',
          marginBottom: '32px',
          mixBlendMode: globalContext.dark ? 'difference' : 'unset'
        }}
      >
        <AnimateWrapper>
          <Box
            sx={{
              display: 'flex',
              width: '640px',
              height: '56px',
              m: 'auto',
              alignItems: 'center',
              [theme.breakpoints.down('sm')]: {
                width: '90%'
              }
            }}
          >
            <Box
              sx={{
                flex: '',
                textDecoration: 'none',
                color: 'inherit',
                marginRight: '50px'
              }}
            >
              <Link href='/'>
                <a style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Logo name={contents.name} />
                </a>
              </Link>
            </Box>

            <Box
              sx={{
                padding: '4px',
                marginRight: '10px',
                backgroundColor: path === '/projects' ? cyan[200] : '',
                color: path === '/projects' ? 'black' : 'inherit',
                border:
                  path === '/projects'
                    ? `2px solid ${cyan[600]}`
                    : `2px solid transparent`
              }}
            >
              <Link href='/projects'>
                <a
                  style={{
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Typography
                      sx={{
                        '&:hover': {
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      {contents.project}
                    </Typography>
                  </motion.div>
                </a>
              </Link>
            </Box>

            <Box
              sx={{
                padding: '4px',
                marginRight: '10px',
                backgroundColor: path === '/posts' ? cyan[200] : '',
                color: path === '/posts' ? 'black' : 'inherit',
                border:
                  path === '/posts'
                    ? `2px solid ${cyan[600]}`
                    : `2px solid transparent`
              }}
            >
              <Link href='/posts'>
                <a
                  style={{
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Typography
                      sx={{
                        '&:hover': {
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      {contents.post}
                    </Typography>
                  </motion.div>
                </a>
              </Link>
            </Box>

            <Button
              onClick={globalContext.toggleLanguage}
              sx={{
                marginLeft: 'auto',
                color: 'inherit',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
              aria-label='change language'
              startIcon={<Translate />}
            >
              {contents.lang}
            </Button>

            <IconButton
              id='theme'
              onClick={globalContext.toggleTheme}
              sx={{
                color: 'inherit'
              }}
              aria-label='change theme'
            >
              {theme.palette.mode === 'dark' ? (
                <DarkMode sx={{ width: 20 }} />
              ) : (
                <LightMode sx={{ width: 20 }} />
              )}
            </IconButton>
          </Box>
        </AnimateWrapper>
      </Box>
    </AnimatePresence>
  )
}
