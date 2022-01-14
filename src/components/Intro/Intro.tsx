import React from 'react'
import { GlobalContext } from '../../App'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import LightMode from '@mui/icons-material/LightMode'
import DarkMode from '@mui/icons-material/DarkMode'
import { Box, IconButton, Typography } from '@mui/material'
import hi from '../../static/images/Hi.gif'

export default function Footer() {
  const globalContext = React.useContext(GlobalContext)
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: '600px'
      }}
    >
      <Typography variant='h3'>
        Hi there, I'm Yulei <img src={hi} height='40px'></img>
      </Typography>
      <br />
      Front-end / Full-stack developer
    </Box>
  )
}
