import React from 'react'
import { GlobalContext } from '../../App'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import { Box, IconButton, Typography } from '@mui/material'

export default function Footer() {
  const globalContext = React.useContext(GlobalContext)
  const theme = useTheme()
  return (
    <Box sx={{}}>
      <Typography variant='body2' sx={{ opacity: '0.5' }}>
        © {new Date().getFullYear()} Yulei Zhu
      </Typography>
    </Box>
  )
}
