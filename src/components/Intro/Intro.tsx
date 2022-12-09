import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../pages/_app'
import {
  Box,
  Typography,
  // Table,
  // TableBody,
  // TableRow,
  // TableCell,
  useTheme,
  Link
} from '@mui/material'
import Contact from './src/Contact'
import Interest from './src/Interest'
import {
  Favorite,
  LocationOn,
  Work,
  Apartment,
  Lightbulb
} from '@mui/icons-material'
import Tech from './src/Tech'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
  }, [
    globalContext.contents.chinese.intro,
    globalContext.contents.english.intro,
    globalContext.english
  ])
  return (
    <Box
      sx={{
        width: '600px',
        [theme.breakpoints.down('sm')]: {
          width: '80%',
          margin: 'auto'
        },
        mixBlendMode: globalContext.dark ? 'difference' : 'unset'
      }}
    >
      {/* Name */}
      <Typography
        variant='h4'
        sx={{
          marginBottom: '1rem',
          fontSize: '1.8rem'
        }}
        component='h2'
      >
        {contents.title}{' '}
        <Image
          src='/images/Hi.gif'
          height='40px'
          width='40px'
          alt='Hi'
          unoptimized
        />
      </Typography>
      <Typography sx={{ marginBottom: '3rem' }}>{contents.role}</Typography>

      {/* Bio */}
      <Typography variant='h5' component='h3' sx={{ marginBottom: '1rem' }}>
        {contents.bio.title}
      </Typography>
      {contents.bio.sections.map(section => (
        <Typography
          key={section}
          sx={{ marginBottom: '1rem', whiteSpace: 'pre-wrap' }}
        >
          {section}
        </Typography>
      ))}

      {/* Experience */}
      <Typography
        variant='h5'
        component='h3'
        sx={{ marginBottom: '1rem', marginTop: '3rem' }}
      >
        {contents.work.title}
      </Typography>
      {contents.work.sections.map(section => (
        <div key={section.place}>
          <Typography
            variant='subtitle1'
            sx={{
              marginBottom: '4px'
            }}
          >
            {section.date}
          </Typography>

          <Typography
            sx={{
              marginLeft: '32px',
              marginBottom: '4px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Work sx={{ height: '18px', marginRight: '8px' }} />
            <b>{section.role}</b>
          </Typography>

          <Typography
            sx={{
              marginLeft: '32px',
              marginBottom: '4px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Lightbulb sx={{ height: '18px', marginRight: '8px' }} />
            {section.tech ? section.tech : ''}
          </Typography>

          <Typography
            sx={{
              marginLeft: '32px',
              marginBottom: '4px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Apartment sx={{ height: '18px', marginRight: '8px' }} />
            <Link href={section.link} target='_blank' rel='noopener'>
              @{section.place}
            </Link>
          </Typography>

          <Typography
            sx={{
              marginLeft: '32px',
              marginBottom: '32px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <LocationOn sx={{ height: '18px', marginRight: '8px' }} />
            {section.location}
          </Typography>
        </div>
      ))}
      {/* Work */}
      {/* <>
        <Typography variant='h5' component='h3' sx={{ marginTop: '3rem' }}>
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </> */}

      {/* Tech-Stack */}
      <Typography
        variant='h5'
        component='h3'
        sx={{ marginTop: '3rem', marginBottom: '1rem' }}
      >
        {contents.tech.title}
      </Typography>
      {/* FE UIs */}
      <Typography variant='h6' component='h4' sx={{ marginBottom: '1rem' }}>
        {contents.tech.subTitle[0]}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {contents.tech.sections.map(section => {
          if (section.type !== 1) return
          return (
            <motion.div whileHover={{ scale: 1.1 }} key={section.name}>
              <Tech
                key={section.name}
                name={section.name}
                point={section.point}
              />
            </motion.div>
          )
        })}
      </Box>

      {/* FE Techs */}
      <Typography
        variant='h6'
        component='h4'
        sx={{ marginBottom: '1rem', marginTop: '1rem' }}
      >
        {contents.tech.subTitle[1]}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {contents.tech.sections.map(section => {
          if (section.type !== 2) return
          return (
            <motion.div whileHover={{ scale: 1.1 }} key={section.name}>
              <Tech
                key={section.name}
                name={section.name}
                point={section.point}
              />
            </motion.div>
          )
        })}
      </Box>

      {/* Other Techs */}
      <Typography
        variant='h6'
        component='h4'
        sx={{ marginBottom: '1rem', marginTop: '1rem' }}
      >
        {contents.tech.subTitle[2]}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {contents.tech.sections.map(section => {
          if (section.type !== 3) return
          return (
            <motion.div whileHover={{ scale: 1.1 }} key={section.name}>
              <Tech
                key={section.name}
                name={section.name}
                point={section.point}
              />
            </motion.div>
          )
        })}
      </Box>

      {/* Interest */}
      <Typography
        variant='h5'
        component='h3'
        sx={{ marginTop: '3rem', marginBottom: '1rem' }}
      >
        {contents.interest.title}{' '}
        <Favorite
          sx={{
            display: 'inline',
            fontSize: '1.1rem'
          }}
        />
      </Typography>
      {contents.interest.sections.map(section => (
        <Interest
          key={section.label}
          label={<Typography>{section.label}</Typography>}
          icon={<section.icon />}
        />
      ))}
      {/* Contact */}
      <Typography
        variant='h5'
        component='h3'
        sx={{ marginTop: '3rem', marginBottom: '1rem' }}
      >
        {contents.contact.title}
      </Typography>
      <Contact />
    </Box>
  )
}
