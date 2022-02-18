import { useTheme } from '@mui/material/styles'
import { Box, Link } from '@mui/material'
import { LinkedIn, GitHub, Email } from '@mui/icons-material'
import Image from 'next/image'
import juejin from '../../../../public/images/juejin.svg'
import juejinDark from '../../../../public/images/juejin-dark.svg'

export default function Contact() {
  const theme = useTheme()

  return (
    <>
      <Link
        href='https://github.com/Vyse12138'
        target='_blank'
        rel='noopener'
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'max-content'
        }}
      >
        <GitHub
          sx={{
            paddingRight: '5px',
            color: theme.palette.mode === 'dark' ? 'white' : 'black'
          }}
        />{' '}
        @vyse12138
      </Link>

      <br />

      <Link
        href='https://www.linkedin.com/in/yulei-zhu-902193195/'
        target='_blank'
        rel='noopener'
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'max-content'
        }}
      >
        <LinkedIn
          sx={{
            paddingRight: '5px',
            color: theme.palette.mode === 'dark' ? 'white' : 'black'
          }}
        />{' '}
        @yulei
      </Link>
      <br />

      <Link
        href='https://juejin.cn/user/1407794523416350/posts'
        target='_blank'
        rel='noopener'
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'max-content'
        }}
      >
        {theme.palette.mode === 'dark' ? (
          <Image
            src={juejinDark}
            height='24px'
            width='24px'
            alt='juejin'
            priority
          />
        ) : (
          <Image
            src={juejin}
            height='24px'
            width='24px'
            alt='juejin'
            priority
          />
        )}
        <Box sx={{ paddingRight: '5px' }} /> @小诸不是小猪
      </Link>

      <br />

      <Link
        href='mailto:yulei.zhu@outlook.com'
        target='_blank'
        rel='noopener'
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'max-content'
        }}
      >
        <Email
          sx={{
            paddingRight: '5px',
            color: theme.palette.mode === 'dark' ? 'white' : 'black'
          }}
        />{' '}
        yulei.zhu@outlook.com
      </Link>
    </>
  )
}
