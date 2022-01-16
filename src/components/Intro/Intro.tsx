import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../App'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  useTheme
} from '@mui/material'
import hi from '../../static/images/Hi.gif'
import Contact from './src/Contact'
import Interest from './src/Interest'
import { LocationOn, Work } from '@mui/icons-material'

export default function Intro() {
  const theme = useTheme()
  const globalContext = useContext(GlobalContext)
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
  return (
    <Box
      sx={{
        width: '600px',
        [theme.breakpoints.down('sm')]: {
          width: '80%',
          margin: 'auto'
        }
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
      {window.innerWidth > 600 && (
        <>
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
                    <Typography
                      sx={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <LocationOn sx={{ height: '18px' }} />
                      {section.location}
                    </Typography>
                    <Typography
                      sx={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <Work sx={{ height: '18px' }} />

                      {section.type}
                    </Typography>
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
        </>
      )}
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
          icon={<section.icon />}
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
