import { useContext, useMemo } from 'react'
import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import LogoDark from '../../../static/images/footprint-dark.png'
import LogoLight from '../../../static/images/footprint.png'
import Typography from '@mui/material/Typography'
import { GlobalContext } from '../../../App'

export default function Logo({ name }: { name: String }) {
  const globalContext = useContext(GlobalContext)

  const theme = useTheme()
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
        {name}
      </Typography>
    </Box>
  )
}
