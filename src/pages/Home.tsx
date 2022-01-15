import React, { useEffect, useContext, useMemo, useState, useRef } from 'react'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import Intro from '../components/Intro'
import { AnimatePresence, motion } from 'framer-motion'
import { GlobalContext } from '../App'
import AnimateWrapper from '../components/AnimateWrapper'
const variants = {
  in: { opacity: 1, x: 0, y: 0 },
  out: { opacity: 0, x: 0, y: 20 }
}

export default function Home() {
  const isEnglish = useContext(GlobalContext).english
  const [animate, setAnimate] = useState(true)
  const isReRender = useRef(true)
  useEffect(() => {
    if (isReRender.current) {
      isReRender.current = false
    } else {
      setAnimate(e => !e)
      setTimeout(() => {
        setAnimate(e => !e)
      }, 350)
    }
  }, [isEnglish, isReRender])

  return (
    <AnimateWrapper>
      <Box sx={{ marginBottom: '10rem' }}>
        <Intro />
      </Box>
    </AnimateWrapper>
  )
}
