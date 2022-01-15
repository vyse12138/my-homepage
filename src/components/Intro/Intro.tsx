import React, { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { GlobalContext } from '../../App'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Chip
} from '@mui/material'
import hi from '../../static/images/Hi.gif'
import Contact from './src/Contact'
import Interest from './src/Interest'
import { MusicNote } from '@mui/icons-material'
import interests from '../../static/data/interests'

export default function Intro() {
  const globalContext = React.useContext(GlobalContext)
  const [contents, setContents] = useState(
    globalContext.english
      ? globalContext.contents.english.intro
      : globalContext.contents.chinese.intro
  )

  useEffect(() => {
    setTimeout(() => {
      setContents(
        globalContext.english
          ? globalContext.contents.english.intro
          : globalContext.contents.chinese.intro
      )
    }, 350)
  }, [globalContext.english])
  const theme = useTheme()
  return (
    <Box
      sx={{
        width: '600px'
      }}
    >
      {/* Name */}
      <Typography variant='h4' sx={{ marginBottom: '1rem' }}>
        {contents.title} <img src={hi} height='40px'></img>
      </Typography>
      <Typography sx={{ marginBottom: '3rem' }}>{contents.role}</Typography>
      {/* Bio */}
      <Typography variant='h5' sx={{ marginBottom: '1rem' }}>
        {contents.bio.title}
      </Typography>
      {contents.bio.sections.map(section => (
        <Typography key={section} sx={{ marginBottom: '1rem' }}>
          {section}
        </Typography>
      ))}

      {/* Work */}
      <Typography variant='h5' sx={{ marginTop: '3rem' }}>
        {contents.work.title}
      </Typography>
      <Table>
        <TableBody>
          {contents.work.sections.map(section => (
            <TableRow key={section.date} sx={{ verticalAlign: 'top' }}>
              <TableCell
                sx={{ minWidth: '150px', paddingLeft: '0', border: 'none' }}
              >
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                  {section.date}
                </Typography>
                <Typography>{section.location}</Typography>
              </TableCell>
              <TableCell sx={{ border: 'none' }}>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                  {section.role}
                </Typography>
                <Typography>{section.description}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Interest */}
      <Typography variant='h5' sx={{ marginTop: '3rem', marginBottom: '1rem' }}>
        {contents.interest.title}{' '}
        <Box
          sx={{ display: 'inline', fontSize: '18px', verticalAlign: 'middle' }}
        >
          ♥
        </Box>
      </Typography>
      {contents.interest.sections.map(section => (
        <Interest
          key={section.label}
          label={<Typography>{section.label}</Typography>}
          icon={<section.icon sx={{}} />}
        />
      ))}

      {/* Contact */}
      <Typography variant='h5' sx={{ marginTop: '3rem', marginBottom: '1rem' }}>
        {contents.contact.title}
      </Typography>
      <Contact />
    </Box>
  )
}
