import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import Image from 'next/image'
import footprint from '../../../../public/images/footprint.png'
import footprintDark from '../../../../public/images/footprint-dark.png'

export default function Logo({ name }: { name: String }) {
  const theme = useTheme()
  return (
    <Box className='logo'>
      <motion.div whileHover={{ scale: 1.2 }}>
        <Box sx={{ display: 'inline' }}>
          {theme.palette.mode === 'dark' ? (
            <Image src={footprintDark} alt='logo' height='22' width='22' />
          ) : (
            <Image src={footprint} alt='logo' height='22' width='22' />
          )}
        </Box>
        <Typography
          variant='h5'
          component='h1'
          sx={{
            display: 'inline',
            [theme.breakpoints.down('sm')]: {
              display: 'none'
            }
          }}
        >
          {name}
        </Typography>
      </motion.div>
    </Box>
  )
}
