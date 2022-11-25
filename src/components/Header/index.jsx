import { Link } from 'react-router-dom'
import { useTheme } from '../../utils/hooks'

function Header() {
  const { theme } = useTheme()
  return (
    <header className="p-8 flex justify-between items-center">
      <Link
        className={`font-pacifico text-4xl ${
          theme === 'broccoli' ? 'text-emerald-800' : 'text-red-600'
        }`}
        to="/"
        theme={theme}
      >
        <h1>{theme === 'broccoli' ? 'Broccoli' : 'Merguez'}</h1>
      </Link>
    </header>
  )
}

export default Header
