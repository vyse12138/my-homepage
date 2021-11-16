import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import LogoDark from '../../../static/Logos/footprint-dark.png'
import LogoLight from '../../../static/Logos/footprint.png'
import Typography from '@mui/material/Typography'

export default function Logo() {
  const theme = useTheme()
  console.log(LogoDark)
  return (
    <Box
      sx={{
        fontSize: '18px'
      }}
    >
      <Typography variant='h5'>
        {theme.palette.mode === 'dark' ? (
          <img src={LogoDark} alt='logo' width='20' />
        ) : (
          <img src={LogoLight} alt='logo' width='20' />
        )}
        Yulei
      </Typography>
    </Box>
  )
}
