import React from 'react'
import { GlobalContext } from '../../App'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import LightMode from '@mui/icons-material/LightMode'
import DarkMode from '@mui/icons-material/DarkMode'
import { Box, IconButton } from '@mui/material'
import { grey, orange } from '@mui/material/colors'
import { width } from '@mui/system'
import Logo from './src/Logo'

export default function Navigation() {
  const globalContext = React.useContext(GlobalContext)
  const theme = useTheme()

  return (
    <Box
      sx={{
        bgcolor: grey[500],
        width: '100%',
        flexDirection: 'row'
      }}
    >
      <Box sx={{ width: '640px', m: 'auto' }}>
        <Logo />
        <IconButton onClick={globalContext.toggleTheme}>
          {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
        </IconButton>
      </Box>
    </Box>
  )
}
