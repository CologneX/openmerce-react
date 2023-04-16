import LoginPage from './unauthed/Login'
import RegisterPage from './unauthed/Register'
import { Routes, Route, Link } from 'react-router-dom'
import {
  Button,
  ThemeOptions,
  ThemeProvider,
  createTheme,
  Paper,
} from '@mui/material'

export default function App() {
  const theme: ThemeOptions = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#35172f',
      },
      secondary: {
        main: '#9c27b0',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Paper className="App">
        <nav>
          <ul>
            <li>
              <Button variant="outlined">
                <Link to="register">Register</Link>
              </Button>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
        <div></div>
      </Paper>
    </ThemeProvider>
  )
}
