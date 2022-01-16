import { Box } from '@mui/material'
import Intro from '../components/Intro'
import AnimateWrapper from '../components/AnimateWrapper'

export default function Home() {
  return (
    <AnimateWrapper>
      <Box sx={{ marginBottom: '10rem' }}>
        <Intro />
      </Box>
    </AnimateWrapper>
  )
}
