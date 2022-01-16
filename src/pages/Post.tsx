import { useContext, useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import AnimateWrapper from '../components/AnimateWrapper'
import PostTab from '../components/PostTab'
import { GlobalContext } from '../App'

export default function Post() {
  const globalContext = useContext(GlobalContext)
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
