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
  const removeAllElementsDraw = () => {
    setElementsDraw([])
  }
  const removeElementsDraw = (el) => {
    const newDrawList = elementsDraw.filter((curr) => curr !== el)
    setElementsDraw(newDrawList)
  }
  const updateElementDraw = (i, newValue) => {
    const newDrawList = elementsDraw.map((curr, index) =>
      index === i ? newValue : curr
    )
    setElementsDraw(newDrawList)
  }

  return (
    <ElementsDrawContext.Provider
      value={{
        elementsDraw,
        saveElementsDraw,
        removeElementsDraw,
        removeAllElementsDraw,
        updateElementDraw,
      }}
    >
      {children}
    </ElementsDrawContext.Provider>
  )
}
