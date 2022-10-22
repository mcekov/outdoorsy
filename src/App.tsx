import { ThemeProvider } from './context/ThemeContext'
import Home from './Pages/Home'
import './App.css'

const App: React.FC = () => {
  return (
    <ThemeProvider initialTheme>
      <Home />
    </ThemeProvider>
  )
}

export default App
