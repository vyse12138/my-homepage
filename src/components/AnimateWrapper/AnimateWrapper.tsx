import { useEffect, useContext, useState, useRef, ReactElement } from 'react'
import { motion } from 'framer-motion'
import { GlobalContext } from '../../pages/_app'

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
