import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box sx={{}}>
      <Typography variant='body2' sx={{ opacity: '0.5' }}>
        © {new Date().getFullYear()} Yulei Zhu
      </Typography>
    </Box>
  )
}
