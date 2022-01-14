import React from 'react'
import { GlobalContext } from '../../App'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import { Box, IconButton, Typography } from '@mui/material'
import hi from '../../static/images/Hi.gif'
import Contact from './src/Contact'

export default function Footer() {
  const globalContext = React.useContext(GlobalContext)
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: '600px'
      }}
    >
      <Typography variant='h4'>
        Hi there, I'm Yulei <img src={hi} height='40px'></img>
      </Typography>
      <br />
      Front-end / Full-stack developer
      <br />
      <br />
      <br />
      <Typography variant='h5'>Education</Typography>
      <br />
      word tropical entirely peace largest cent temperature member object castle
      then taken sense wagon elephant flower field factory chain fix weight lamp
      protection depthall burn than ill branch promised type snake nose
      community property income afraid brown badly many equally pure improve
      dinner elephant egg scale opportunity
      <br />
      <br />
      <br />
      <Typography variant='h5'>Work</Typography>
      <br />
      word tropical entirely peace largest cent temperature member object castle
      then taken sense wagon elephant flower field factory chain fix weight lamp
      protection depthall burn than ill branch promised type snake nose
      community property income afraid brown badly many equally pure improve
      dinner elephant egg scale opportunity
      <br />
      <br />
      <br />
      <Typography variant='h5'>About</Typography>
      <br />
      word tropical entirely peace largest cent temperature member object castle
      then taken sense wagon elephant flower field factory chain fix weight lamp
      protection depthall burn than ill branch promised type snake nose
      community property income afraid brown badly many equally pure improve
      dinner elephant egg scale opportunity
      <br />
      <br />
      <br />
      <Typography variant='h5'>To find me </Typography>
      <br />
      <Contact />
      <br />
    </Box>
  )
}
