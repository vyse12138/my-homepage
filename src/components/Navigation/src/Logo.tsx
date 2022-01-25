import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Logo({ name }: { name: String }) {
  const theme = useTheme()
  return (
    <Typography variant='h5' component='h1' className='logo'>
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
            <Image
              src='/images/footprint-dark.png'
              alt='logo'
              height='20'
              width='20'
            />
          ) : (
            <Image
              src='/images/footprint.png'
              alt='logo'
              height='20'
              width='20'
            />
          )}
        </Box>

        {name}
      </motion.div>
    </Typography>
  )
}
