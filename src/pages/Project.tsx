import { useContext, useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import AnimateWrapper from '../components/AnimateWrapper'
import ProjectTab from '../components/ProjectTab'
import { GlobalContext } from '../App'

export default function Project() {
  const globalContext = useContext(GlobalContext)
  const [contents, setContents] = useState(
    globalContext.english
      ? globalContext.contents.english.project
      : globalContext.contents.chinese.project
  )
  useEffect(() => {
    setTimeout(() => {
      setContents(
        globalContext.english
          ? globalContext.contents.english.project
          : globalContext.contents.chinese.project
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
          {contents.sections.map(project => (
            <ProjectTab
              img={project.img}
              title={project.title}
              description={project.description}
              preview={project.preview}
              source={project.source}
            />
          ))}
        </Box>
      </Box>
    </AnimateWrapper>
  )
}
