import { ReactElement } from 'react'
import { Chip } from '@mui/material'

export default function Interest({
  label,
  icon
}: {
  label: ReactElement
  icon: ReactElement
}) {
  return (
    <Chip
      label={label}
      onClick={() => {}}
      icon={icon}
      variant='outlined'
      sx={{
        marginRight: '10px',
        marginBottom: '20px'
      }}
    ></Chip>
  )
}
