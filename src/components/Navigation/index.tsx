import React from 'react'
import { GlobalContext } from '../../App'
import { useTheme } from '@mui/material/styles'
import LightMode from '@mui/icons-material/LightMode'
import DarkMode from '@mui/icons-material/DarkMode'
import { Box, IconButton, Typography } from '@mui/material'
import { grey, orange } from '@mui/material/colors'
import Logo from './src/Logo'
import { NavLink } from 'react-router-dom'
export default function Navigation() {
  const globalContext = React.useContext(GlobalContext)
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: '100%'
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
            pr: '1rem'
          }}
        >
          <Logo />
        </Box>
        <Box
          component={NavLink}
          to='/projects'
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            pl: '1rem'
          }}
        >
          <Typography variant='h6'>Projects</Typography>
        </Box>
        <Box
          component={NavLink}
          to='/posts'
          sx={{
            flex: '1',
            textDecoration: 'none',
            color: 'inherit',
            pl: '1rem'
          }}
        >
          <Typography variant='h6'>Posts</Typography>
        </Box>

        <IconButton onClick={globalContext.toggleTheme}>
          {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
        </IconButton>
      </Box>
    </Box>
  )
}
