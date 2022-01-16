import React, { useState } from 'react'
import { GlobalContext } from '../../App'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import {
  Box,
  IconButton,
  Typography,
  Card,
  CardMedia,
  Modal,
  Backdrop,
  Fade,
  Button,
  Popover,
  Link
} from '@mui/material'
import pig from '../../static/images/pig.jpeg'
import { GitHub, MenuBook } from '@mui/icons-material'
import AnimateWrapper from '../AnimateWrapper'
import { AnimatePresence, motion } from 'framer-motion'

export default function PostTab({
  img,
  title,
  description,
  preview
}: {
  img: string
  title: string
  description: string
  preview: string
}) {
  const globalContext = React.useContext(GlobalContext)
  const theme = useTheme()
  const [info, setInfo] = useState(false)
  const handleClick = () => {
    setInfo(e => !e)
  }

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {info ? (
        <motion.div
          key={1}
          initial={{ rotateY: 90 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: -90 }}
          transition={{ duration: 0.2, type: 'easeInOut' }}
        >
          <Box
            onClick={handleClick}
            sx={{
              width: '288px',
              height: '227px',
              marginBottom: '2rem',
              backgroundColor: 'background.paper',
              boxShadow: '1px solid black',
              borderRadius: '10px',
              padding: '1rem',
              boxSizing: 'border-box'
            }}
          >
            <Box
              sx={{
                height: '163px'
              }}
            >
              {' '}
              <Typography sx={{ marginBottom: '1rem' }}>
                {description}
              </Typography>
              {preview && (
                <Link
                  href={preview}
                  target='_blank'
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 'max-content'
                  }}
                >
                  <MenuBook sx={{ paddingRight: '5px' }} /> Read it here
                </Link>
              )}
            </Box>

            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                backgroundColor: 'inherit'
              }}
            >
              {title}
            </Typography>
          </Box>
        </motion.div>
      ) : (
        <motion.div
          key={2}
          initial={{ rotateY: -90 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: 90 }}
          transition={{ duration: 0.2, type: 'easeInOut' }}
        >
          <Box
            onClick={handleClick}
            sx={{
              width: '288px',
              marginBottom: '2rem',
              border: 'none',
              boxShadow: 'none',
              cursor: 'pointer',
              borderRadius: '10px'
            }}
          >
            <CardMedia
              component='img'
              draggable={false}
              image={img}
              sx={{
                height: '163px',
                borderRadius: '10px'
              }}
            />
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                backgroundColor: 'inherit',
                padding: '1rem 0'
              }}
            >
              {title}
            </Typography>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
