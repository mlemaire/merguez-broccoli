import { useContext } from 'react'
import { ThemeContext, ElementsDrawContext } from './../context'

export const useTheme = () => {
  const { theme, toogleTheme } = useContext(ThemeContext)
  return { theme, toogleTheme }
}

export const useElementsDraw = () => {
  const { elementsDraw, saveElementsDraw, removeElementsDraw } =
    useContext(ElementsDrawContext)
  return { elementsDraw, saveElementsDraw, removeElementsDraw }
}
