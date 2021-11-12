import './App.css'
import React from 'react'

import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import LightMode from '@mui/icons-material/LightMode'
import DarkMode from '@mui/icons-material/DarkMode'
import { Box, IconButton } from '@mui/material'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

function App() {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        height: '100vh'
      }}
    >
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
      </IconButton>
    </Box>
  )
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
