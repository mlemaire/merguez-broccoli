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
    setElementsDraw([...elementsDraw, { value: newElement, cheat: false }])
  }
  const removeAllElementsDraw = () => {
    setElementsDraw([])
  }
  const removeElementsDraw = (el) => {
    const newDrawList = elementsDraw.filter((curr) => curr.value !== el.value)
    setElementsDraw(newDrawList)
  }
  const updateElementDraw = (i, newValue) => {
    const newDrawList = elementsDraw.map((curr, index) => {
      return { ...curr, value: index === i ? newValue : curr.value }
    })
    setElementsDraw(newDrawList)
  }
  const setCheat = (value) => {
    const newCheatList = elementsDraw.map((curr) => {
      return { ...curr, cheat: curr.value === value ? true : false }
    })
    setElementsDraw(newCheatList)
  }

  return (
    <ElementsDrawContext.Provider
      value={{
        elementsDraw,
        saveElementsDraw,
        removeElementsDraw,
        removeAllElementsDraw,
        updateElementDraw,
        setCheat,
      }}
    >
      {children}
    </ElementsDrawContext.Provider>
  )
}
