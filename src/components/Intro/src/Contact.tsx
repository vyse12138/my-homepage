import React from 'react'
import { GlobalContext } from '../../../App'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import { Box, IconButton, Typography, Link } from '@mui/material'
import { LinkedIn, GitHub, Email } from '@mui/icons-material'
import JueJin from '../../../static/images/juejin-dark.svg'
import JueJinDark from '../../../static/images/juejin.svg'

export default function Footer() {
  const globalContext = React.useContext(GlobalContext)
  const theme = useTheme()

  return (
    <>
      <Link
        href='https://github.com/Vyse12138'
        target='_blank'
        underline='hover'
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'inherit'
        }}
      >
        <GitHub sx={{ paddingRight: '5px' }} /> @vyse12138
      </Link>

      <br />

      <Link
        href='https://www.linkedin.com/in/yulei-zhu-902193195/'
        target='_blank'
        underline='hover'
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'inherit'
        }}
      >
        <LinkedIn sx={{ paddingRight: '5px' }} /> @yulei
      </Link>
      <br />

      <Link
        href='https://juejin.cn/user/1407794523416350'
        target='_blank'
        underline='hover'
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'inherit'
        }}
      >
        {theme.palette.mode === 'dark' ? (
          <img src={JueJin} height='24px' />
        ) : (
          <img src={JueJinDark} height='24px' />
        )}
        <Box sx={{ paddingRight: '5px' }} /> @小诸不是小猪
      </Link>

      <br />

      <Link
        href='mailto:yulei.zhu@outlook.com'
        target='_blank'
        underline='hover'
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'inherit'
        }}
      >
        <Email sx={{ paddingRight: '5px' }} /> yulei.zhu@outlook.com
      </Link>
    </>
  )
}
