import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import LogoDark from '../../../static/images/footprint-dark.png'
import LogoLight from '../../../static/images/footprint.png'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'

export default function Logo({ name }: { name: String }) {
  const theme = useTheme()
  return (
    <Box
      sx={{
        fontSize: '18px'
      }}
    >
      <Typography variant='h5'>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Box
            sx={{
              display: 'inline',
              [theme.breakpoints.down('xs')]: {
                display: 'none'
              }
            }}
          >
            {theme.palette.mode === 'dark' ? (
              <img src={LogoDark} alt='logo' width='20' />
            ) : (
              <img src={LogoLight} alt='logo' width='20' />
            )}
          </Box>

          {name}
        </motion.div>
      </Typography>
    </Box>
  )
}
