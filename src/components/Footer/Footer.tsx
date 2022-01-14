import React from 'react'
import { GlobalContext } from '../../App'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import { Box, IconButton } from '@mui/material'

export default function Footer() {
  const globalContext = React.useContext(GlobalContext)
  const theme = useTheme()
  return <Box sx={{}}>Footer</Box>
}
