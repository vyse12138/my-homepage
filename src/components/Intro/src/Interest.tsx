import React, { ReactElement } from 'react'
import { GlobalContext } from '../../../App'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import { Box, Chip, SvgIconTypeMap } from '@mui/material'
import hi from '../../static/images/Hi.gif'
import { fontSize, fontWeight } from '@mui/system'
import { MusicNote } from '@mui/icons-material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
export default function Footer({
  label,
  icon
}: {
  label: ReactElement
  icon: ReactElement
}) {
  const globalContext = React.useContext(GlobalContext)
  const theme = useTheme()

  return (
    <Chip
      label={label}
      onClick={() => {}}
      icon={icon}
      variant='outlined'
      sx={{
        marginRight: '20px',
        marginBottom: '20px'
      }}
    ></Chip>
  )
}
