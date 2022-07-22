import { useState } from 'react'
import { Box, Typography, Link, useTheme } from '@mui/material'
import { GitHub, WebAsset } from '@mui/icons-material'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

export default function ProjectTab({
  img,
  title,
  description,
  preview,
  source
}: {
  img: StaticImageData
  title: string
  description: string
  preview: string
  source: string
}) {
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
              height: '232px',
              marginBottom: '2rem',
              backgroundColor: 'background.paper',
              boxShadow:
                theme.palette.mode === 'dark'
                  ? '3px 3px 10px 3px rgb(180 180 180 / 20%)'
                  : ' 3px 3px 10px 3px rgb(0 0 0 / 20%)',
              padding: '1rem',
              boxSizing: 'border-box',
              borderRadius: '10px'
            }}
          >
            <Box
              sx={{
                height: '163px'
              }}
            >
              {' '}
              <Typography sx={{ marginBottom: '0.2rem' }}>
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
                  onClick={e => {
                    e.stopPropagation()
                  }}
                >
                  <WebAsset sx={{ paddingRight: '5px' }} /> Preview
                </Link>
              )}
              {source && (
                <Link
                  href={source}
                  target='_blank'
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 'max-content'
                  }}
                  onClick={e => {
                    e.stopPropagation()
                  }}
                >
                  <GitHub sx={{ paddingRight: '5px' }} />{' '}
                  <Typography>Source</Typography>
                </Link>
              )}
            </Box>

            <Typography
              variant='h6'
              component='h3'
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
          whileHover={{ scale: 1.1 }}
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
              cursor: 'pointer',
              borderRadius: '10px',
              backgroundColor: 'background.paper',
              boxShadow:
                theme.palette.mode === 'dark'
                  ? '3px 3px 10px 3px rgb(180 180 180 / 20%)'
                  : ' 3px 3px 10px 3px rgb(0 0 0 / 20%)'
            }}
          >
            <Image
              draggable={false}
              src={img}
              height='163px'
              width='288px'
              alt={title}
              className='br-10'
              placeholder='blur'
            />
            <Typography
              variant='h6'
              component='h3'
              sx={{
                textAlign: 'center',
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
