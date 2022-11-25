import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('broccoli')
  const toogleTheme = () => {
    setTheme(theme === 'broccoli' ? 'merguez' : 'broccoli')
  }

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const ElementsDrawContext = createContext()

export const ElementsDrawProvider = ({ children }) => {
  const [elementsDraw, setElementsDraw] = useState([])
  const saveElementsDraw = (newElement) => {
    setElementsDraw([...elementsDraw, newElement])
  }
  const removeElementsDraw = () => {
    setElementsDraw([])
  }

  return (
    <ElementsDrawContext.Provider
      value={{ elementsDraw, saveElementsDraw, removeElementsDraw }}
    >
      {children}
    </ElementsDrawContext.Provider>
  )
}
