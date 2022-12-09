import { Box } from '@mui/material'
import Intro from '../components/Intro'
import AnimateWrapper from '../components/AnimateWrapper'
import Head from 'next/head'
import { useContext, useEffect } from 'react'
import { GlobalContext } from './_app'

export default function En() {
  const globalContext = useContext(GlobalContext)
  useEffect(() => {
    globalContext.toggleLanguage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
