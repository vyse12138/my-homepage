import React from 'react'
import { GlobalContext } from '../../App'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import LightMode from '@mui/icons-material/LightMode'
import DarkMode from '@mui/icons-material/DarkMode'
import { Box, IconButton } from '@mui/material'

export default function Navigation() {
  const globalContext = React.useContext(GlobalContext)
  const theme = useTheme()
  return <Box sx={{}}>yulei</Box>
}
