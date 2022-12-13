import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../../utils/hooks'

import './index.css'

function Header() {
  const { theme } = useTheme()
  return (
    <header className="p-8 flex justify-between items-center">
      <Link
        className={`font-pacifico text-4xl ${
          theme === 'broccoli' ? 'text-emerald-800' : 'text-red-600'
        }`}
        to="/"
      >
        <h1>{theme === 'broccoli' ? 'Broccoli' : 'Merguez'}</h1>
      </Link>
      <nav className="flex gap-6">
        <NavLink
          className={`btn transition-colors bg-white hover:bg-slate-100`}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={`btn transition-colors bg-white hover:bg-slate-100`}
          to="/about"
        >
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
