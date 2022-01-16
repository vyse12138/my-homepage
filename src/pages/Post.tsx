import React, { useEffect, useState } from 'react'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import Intro from '../components/Intro'
import { AnimatePresence, motion } from 'framer-motion'
import AnimateWrapper from '../components/AnimateWrapper'
import PostTab from '../components/PostTab'
import { GlobalContext } from '../App'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}
export default function Post() {
  const globalContext = React.useContext(GlobalContext)
  const [contents, setContents] = useState(
    globalContext.english
      ? globalContext.contents.english.post
      : globalContext.contents.chinese.post
  )
  useEffect(() => {
    setTimeout(() => {
      setContents(
        globalContext.english
          ? globalContext.contents.english.post
          : globalContext.contents.chinese.post
      )
    }, 350)
  }, [globalContext.english])

  return (
    <AnimateWrapper>
      <Box
        sx={{
          marginBottom: '10rem',
          width: '600px'
        }}
      >
        <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
          {contents.title}
        </Typography>
        <Box
          sx={{
            display: ' flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}
        >
          {contents.sections.map(post => (
            <PostTab
              img={post.img}
              title={post.title}
              description={post.description}
              preview={post.preview}
            />
          ))}
        </Box>
      </Box>
    </AnimateWrapper>
  )
}
