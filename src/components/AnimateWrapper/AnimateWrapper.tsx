import React, {
  useEffect,
  useContext,
  useMemo,
  useState,
  useRef,
  ReactElement
} from 'react'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { GlobalContext } from '../../App'

const variants = {
  in: { opacity: 1, x: 0, y: 0 },
  out: { opacity: 0, x: 0, y: 20 }
}

export default function AnimateWrapper({
  children
}: {
  children: ReactElement
}) {
  const isEnglish = useContext(GlobalContext).english
  const [animate, setAnimate] = useState(true)
  const isReRender = useRef(true)
  useEffect(() => {
    if (isReRender.current) {
      window.scrollTo({
        top: 0
        // behavior: 'smooth'
      })
      isReRender.current = false
    } else {
      setAnimate(e => !e)
      setTimeout(() => {
        setAnimate(e => !e)
      }, 350)
    }
  }, [isEnglish, isReRender])

  return (
    <motion.div
      initial='out'
      animate={animate ? 'in' : 'out'}
      exit='out'
      variants={variants}
      transition={{ duration: 0.35, type: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
