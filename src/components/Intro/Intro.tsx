import React from 'react'
import { GlobalContext } from '../../App'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import {
  Box,
  Typography,
  Table,
  TableRow,
  TableCell,
  Chip
} from '@mui/material'
import hi from '../../static/images/Hi.gif'
import Contact from './src/Contact'
import Interest from './src/Interest'
import { MusicNote } from '@mui/icons-material'
import interests from '../../static/data/interests'

export default function Footer() {
  const globalContext = React.useContext(GlobalContext)
  const theme = useTheme()
  return (
    <Box
      sx={{
        width: '600px'
      }}
    >
      <Typography variant='h4'>
        Hi there, I'm Yulei <img src={hi} height='40px'></img>
      </Typography>
      <br />
      Front-end / Full-stack developer
      <br />
      <br />
      <br />
      <Typography variant='h5'>Bio</Typography>
      <br />
      <Typography>
        I started my uni journey at Swinburne University of Technology (SUT) in
        2018, with a bachelor of Software Engineering (Honours) (professional)
        degree.
        <br />
        <br />
        In the third year of my uni, I found out that front-end development is
        what I'm passionate about and did some further study in the front-end
        area, then I got an internship opportunity as a front-end developer at
        Agriview. And in the next year, I accepted a 12-month placement offer as
        a full-stack developer at Movember.
      </Typography>
      <br />
      <br />
      <br />
      <Typography variant='h5'>Work</Typography>
      <br />
      <Table>
        <TableRow sx={{ verticalAlign: 'top' }}>
          <TableCell
            sx={{ minWidth: '130px', paddingLeft: '0', border: 'none' }}
          >
            <Typography sx={{ fontWeight: 'bold' }}>
              2021.08 - Present
            </Typography>
          </TableCell>
          <TableCell sx={{ border: 'none' }}>
            <Typography sx={{ fontWeight: 'bold' }}>
              Full-Stack Developer @Movember
            </Typography>
            <Typography>
              Worked in an agile team to develop web product. Used react +
              TypeScript + Node as the main tech stack, wrote robust (95% + Jest
              coverage) and elegant (airbnb based ESlint) code as well as
              reviewed teams' PRs.
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow sx={{ verticalAlign: 'top' }}>
          <TableCell sx={{ paddingLeft: '0', border: 'none' }}>
            <Typography sx={{ fontWeight: 'bold' }}>
              2020.12 - 2021.03
            </Typography>
          </TableCell>
          <TableCell sx={{ border: 'none' }}>
            <Typography sx={{ fontWeight: 'bold' }}>
              Front-End Developer @Agriview
            </Typography>
            <Typography>
              Refactored an old project with Vue3 and featured more responsive
              supports. Reduced some redundant code, and added clear comments to
              make it more extensible.
            </Typography>
          </TableCell>
        </TableRow>
      </Table>
      <br />
      <br />
      <Typography variant='h5'>
        I{' '}
        <Box
          sx={{ display: 'inline', fontSize: '18px', verticalAlign: 'middle' }}
        >
          ♥
        </Box>
      </Typography>
      <br />
      {interests.map(interest => (
        <Interest
          label={<Typography>{interest.label}</Typography>}
          icon={<interest.icon />}
        />
      ))}
      <br />
      <br />
      <br />
      <Typography variant='h5'>I'm </Typography>
      <br />
      <Contact />
      <br />
    </Box>
  )
}
