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
import { GitHub, WebAsset } from '@mui/icons-material'
import AnimateWrapper from '../AnimateWrapper'
import { AnimatePresence, motion } from 'framer-motion'

export default function ProjectTab({
  img,
  title,
  description,
  preview,
  source
}: {
  img: string
  title: string
  description: string
  preview: string
  source: string
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
                  underline='hover'
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'inherit',
                    width: 'max-content'
                  }}
                >
                  <WebAsset sx={{ paddingRight: '5px' }} /> Preview
                </Link>
              )}
              {source && (
                <Link
                  href={source}
                  target='_blank'
                  underline='hover'
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: 'inherit',
                    width: 'max-content'
                  }}
                >
                  <GitHub sx={{ paddingRight: '5px' }} />{' '}
                  <Typography>Source</Typography>
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
