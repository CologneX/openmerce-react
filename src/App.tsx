import LoginPage from './unauthed/Login'
import RegisterPage from './unauthed/Register'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="register">Register</Link>
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
      <div>
      </div>
    </div>
  )
}

export default App
