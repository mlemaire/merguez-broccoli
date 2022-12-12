import React, { createContext, useState } from 'react'

type IChildren = {
  children: React.ReactNode
}

export type IThemeContext = {
  theme: string
  toogleTheme: () => void
}

export const ThemeContext = createContext<IThemeContext>(undefined!)

export const ThemeProvider = ({ children }: IChildren) => {
  const [theme, setTheme] = useState('broccoli')

  const samplethemeContext: IThemeContext = {
    theme: theme,
    toogleTheme: () => setTheme(theme === 'broccoli' ? 'merguez' : 'broccoli'),
  }

  return (
    <ThemeContext.Provider value={samplethemeContext}>
      {children}
    </ThemeContext.Provider>
  )
}

type IElDrawContext = {
  elementsDraw: Array<{ value: string; cheat: boolean }>
  saveElementsDraw: (newElement: string) => void
  removeElementsDraw: (el: { value: string; cheat: boolean }) => void
  removeAllElementsDraw: () => void
  updateElementDraw: (i: number, newValue: string) => void
  setCheat: (value: string) => void
}

export const ElementsDrawContext = createContext<IElDrawContext>(undefined!)

export const ElementsDrawProvider = ({ children }: IChildren) => {
  const [elementsDraw, setElementsDraw] = useState<
    { value: string; cheat: boolean }[]
  >([])

  const sampleDrawContext: IElDrawContext = {
    elementsDraw: elementsDraw,
    saveElementsDraw: (newElement) => {
      setElementsDraw([...elementsDraw, { value: newElement, cheat: false }])
    },
    removeElementsDraw: (el) => {
      const newDrawList = elementsDraw.filter((curr) => curr.value !== el.value)
      setElementsDraw(newDrawList)
    },
    removeAllElementsDraw: () => setElementsDraw([]),
    updateElementDraw: (i, newValue) => {
      const newDrawList = elementsDraw.map((curr, index) => {
        return { ...curr, value: index === i ? newValue : curr.value }
      })
      setElementsDraw(newDrawList)
    },
    setCheat: (value) => {
      const newCheatList = elementsDraw.map((curr) => {
        return { ...curr, cheat: curr.value === value ? true : false }
      })
      setElementsDraw(newCheatList)
    },
  }

  return (
    <ElementsDrawContext.Provider value={sampleDrawContext}>
      {children}
    </ElementsDrawContext.Provider>
  )
}
