import React, { useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GlobalContext } from '../../App'
import { useTheme } from '@mui/material/styles'
import { Translate, DarkMode, LightMode } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import { grey, orange, cyan } from '@mui/material/colors'
import Logo from './src/Logo'
import { NavLink } from 'react-router-dom'
export default function Navigation() {
  const globalContext = React.useContext(GlobalContext)
  const contents = useMemo(() => {
    return globalContext.english
      ? globalContext.contents.english.nav
      : globalContext.contents.chinese.nav
  }, [globalContext.english])
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: '100%',
        position: 'sticky',
        top: '0',
        left: '0',
        backdropFilter: 'blur(10px)'
      }}
    >
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
          <Logo />
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
          <Typography
            sx={{
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            {contents.project}
          </Typography>
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
          <Typography
            sx={{
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            {contents.post}
          </Typography>
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
    </Box>
  )
}
