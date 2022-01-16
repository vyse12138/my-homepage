import { ReactElement } from 'react'
import {
  Box,
  Chip,
  Typography,
  CircularProgress,
  useTheme
} from '@mui/material'

export default function Tech({ name, point }: { name: string; point: number }) {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '24px',
        border:
          theme.palette.mode === 'dark'
            ? '1px solid rgba(97,97,97)'
            : '1px solid rgba(189,189,189)',
        padding: '8px 10px',
        marginRight: '20px',
        marginBottom: '20px',
        width: 'max-content'
      }}
    >
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          variant='determinate'
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          color='inherit'
          value={100}
          size={30}
        />
        <CircularProgress variant='determinate' value={point * 10} size={30} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography>{point}</Typography>
        </Box>
      </Box>
      <Typography sx={{ marginLeft: '10px' }}>{name}</Typography>
    </Box>
  )
}
