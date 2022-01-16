import { useContext, useEffect, useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import AnimateWrapper from '../components/AnimateWrapper'
import PostTab from '../components/PostTab'
import { GlobalContext } from '../App'

export default function Post() {
  const theme = useTheme()
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
          width: '600px',
          [theme.breakpoints.down('sm')]: {
            width: '100%'
          }
        }}
      >
        <Typography
          variant='h4'
          sx={{
            marginBottom: '2rem',
            [theme.breakpoints.down('sm')]: {
              textAlign: 'center'
            }
          }}
        >
          {contents.title}
        </Typography>
        <Box
          sx={{
            display: ' flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            [theme.breakpoints.down('sm')]: {
              justifyContent: 'center'
            }
          }}
        >
          {contents.sections.map(post => (
            <PostTab
              img={post.img}
              key={post.title}
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
