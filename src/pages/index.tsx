import React from 'react'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import Intro from '../components/Intro'

export default function Index() {
  return (
    <Box sx={{ minHeight: '2200px' }}>
      <Intro />
    </Box>
  )
}
