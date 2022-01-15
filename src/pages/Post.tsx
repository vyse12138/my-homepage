import React, { useEffect } from 'react'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import Intro from '../components/Intro'
import { AnimatePresence, motion } from 'framer-motion'
import AnimateWrapper from '../components/AnimateWrapper'
import { Box, Typography } from '@mui/material'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}
export default function Project() {
  return (
    <AnimateWrapper>
      <Box sx={{ marginBottom: '10rem', minHeight: '1200px' }}>
        <Typography variant='h5'>Post</Typography>
      </Box>
    </AnimateWrapper>
  )
}
