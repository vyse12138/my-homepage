import { useTheme } from '@mui/material/styles'
import { Box, Link } from '@mui/material'
import { LinkedIn, GitHub, Email } from '@mui/icons-material'
import JueJin from '../../../static/images/juejin-dark.svg'
import JueJinDark from '../../../static/images/juejin.svg'

export default function Footer() {
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
          color: 'inherit',
          width: 'max-content'
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
          color: 'inherit',
          width: 'max-content'
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
          color: 'inherit',
          width: 'max-content'
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
          color: 'inherit',
          width: 'max-content'
        }}
      >
        <Email sx={{ paddingRight: '5px' }} /> yulei.zhu@outlook.com
      </Link>
    </>
  )
}
