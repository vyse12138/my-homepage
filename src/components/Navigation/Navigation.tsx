import { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { GlobalContext } from '../../App'
import { useTheme } from '@mui/material/styles'
import { Translate, DarkMode, LightMode } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import { cyan } from '@mui/material/colors'
import { alpha } from '@mui/material/styles'
import AnimateWrapper from '../../components/AnimateWrapper'
import Logo from './src/Logo'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
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
  }, [globalContext.english])

  return (
    <Box
      sx={{
        width: '100%',
        position: 'sticky',
        top: '0',
        left: '0',
        backgroundColor: alpha(theme.palette.background.default, 0.6),
        backdropFilter: 'blur(6px)',
        zIndex: '1'
      }}
    >
      <AnimateWrapper>
        <Box
          sx={{
            display: 'flex',
            width: '640px',
            height: '56px',
            m: 'auto',
            alignItems: 'center'
          }}
        >
          <Box
            component={NavLink}
            to='/'
            sx={{
              flex: '',
              textDecoration: 'none',
              color: 'inherit',
              marginRight: '50px'
            }}
          >
            <Logo name={contents.name} />
          </Box>
          <NavLink
            to='/projects'
            style={({ isActive }) => {
              return {
                textDecoration: 'none',
                color: isActive ? 'black' : 'inherit',
                padding: '4px',
                marginRight: '10px',
                backgroundColor: isActive ? cyan[200] : ''
              }
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
          </NavLink>
          <NavLink
            to='/posts'
            style={({ isActive }) => {
              return {
                textDecoration: 'none',
                color: isActive ? 'black' : 'inherit',
                padding: '4px',
                backgroundColor: isActive ? cyan[200] : '',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }
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
          </NavLink>

          <IconButton
            onClick={globalContext.toggleLanguage}
            sx={{
              marginLeft: 'auto',
              color: 'inherit'
            }}
          >
            <Translate />
          </IconButton>
          <IconButton
            onClick={globalContext.toggleTheme}
            sx={{
              color: 'inherit'
            }}
          >
            {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>
      </AnimateWrapper>
    </Box>
  )
}
