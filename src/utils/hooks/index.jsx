import { useContext, useEffect, useState } from 'react'
import { ThemeContext, ElementsDrawContext } from './../context'

export const useTheme = () => {
  const { theme, toogleTheme } = useContext(ThemeContext)
  return { theme, toogleTheme }
}

export const useElementsDraw = () => {
  const {
    elementsDraw,
    saveElementsDraw,
    removeElementsDraw,
    removeAllElementsDraw,
    updateElementDraw,
    setCheat,
  } = useContext(ElementsDrawContext)
  return {
    elementsDraw,
    saveElementsDraw,
    removeElementsDraw,
    removeAllElementsDraw,
    updateElementDraw,
    setCheat,
  }
}

export const useFetch = ({ url, cond = true }) => {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return
    setLoading(true)

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    if (cond) {
      fetchData()
    }
  }, [url, cond])

  return {
    data,
    isLoading,
    error,
  }
}
