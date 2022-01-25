import { Box } from '@mui/material'
import Intro from '../components/Intro'
import AnimateWrapper from '../components/AnimateWrapper'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yulei&apos;s Homepage</title>
      </Head>
      <AnimateWrapper key={1}>
        <Box sx={{ marginBottom: '10rem' }}>
          <Intro />
        </Box>
      </AnimateWrapper>
    </>
  )
}
