import { useContext } from 'react'
import { ThemeContext } from './../context'

export const useTheme = () => {
  const { theme, toogleTheme } = useContext(ThemeContext)
  return { theme, toogleTheme }
}
