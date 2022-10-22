import { useContext } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import { ThemeContext } from '../../context/ThemeContext'

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className="p-3">
      {theme === 'dark' ? (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <HiSun className="text-primary text-2xl mr-2" />
          <span className="whitespace-nowrap">Light Mode</span>
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <HiMoon className="text-primary text-2xl mr-2" />
          <span className="whitespace-nowrap">Dark Mode</span>
        </div>
      )}
    </div>
  )
}

export default ThemeToggle
