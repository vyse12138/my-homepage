import { useContext, useEffect, useState } from 'react'
import { Box, Link, Typography, useTheme } from '@mui/material'
import AnimateWrapper from '../components/AnimateWrapper'
import PostTab from '../components/PostTab'
import { GlobalContext } from '../pages/_app'
import Head from 'next/head'

export default function Posts() {
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
  }, [
    globalContext.contents.chinese.post,
    globalContext.contents.english.post,
    globalContext.english
  ])

  return (
    <>
      <Head>
        <title>Yulei&apos;s Posts</title>
      </Head>
      <AnimateWrapper key={2}>
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
            component='h2'
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
                key={post.id}
                title={post.title}
                description={post.description}
                preview={post.preview}
                read={contents.read}
              />
            ))}
          </Box>
          {contents.more && (
            <Typography sx={{ marginTop: '10px' }}>
              或者在掘金上阅读更多：
              <Link
                href='https://juejin.cn/user/1407794523416350/posts'
                target='_blank'
                sx={{
                  display: 'inline'
                }}
              >
                @小诸不是小猪
              </Link>
            </Typography>
          )}
        </Box>
      </AnimateWrapper>
    </>
  )
}
