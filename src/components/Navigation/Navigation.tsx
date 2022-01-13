import React from 'react'
import { GlobalContext } from '../../App'
import { useTheme } from '@mui/material/styles'
import LightMode from '@mui/icons-material/LightMode'
import DarkMode from '@mui/icons-material/DarkMode'
import { Box, IconButton, Typography } from '@mui/material'
import { grey, orange, cyan } from '@mui/material/colors'
import Logo from './src/Logo'
import { NavLink } from 'react-router-dom'
export default function Navigation() {
  const globalContext = React.useContext(GlobalContext)
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: '100%',
        position: 'sticky',
        top: '0',
        left: '0'
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
            Projects
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
            Posts
          </Typography>
        </NavLink>

        <IconButton
          onClick={globalContext.toggleTheme}
          sx={{
            marginLeft: 'auto'
          }}
        >
          {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
        </IconButton>
      </Box>
    </Box>
  )
}
