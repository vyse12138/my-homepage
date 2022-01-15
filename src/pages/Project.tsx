import React, { useEffect } from 'react'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import Intro from '../components/Intro'
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}
export default function Index() {
  return (
    <Box sx={{ marginBottom: '10rem' }}>
      <motion.div
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{ duration: 0.35, type: 'easeInOut' }}
        style={{ position: 'relative' }}
      >
        Projects
      </motion.div>
    </Box>
  )
}
