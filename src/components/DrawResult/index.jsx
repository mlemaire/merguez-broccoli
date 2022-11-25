import { useEffect, useState } from 'react'
import { useTheme } from '../../utils/hooks'
import List from '../List'

function DrawResult({ choices, setShowResult }) {
  const { theme } = useTheme
  const [isLoading, setLoading] = useState(true)
  const [isSelectedId, setSelectedId] = useState(0)

  const maxId = choices.length - 1
  const winner = Math.floor(Math.random() * choices.length)

  useEffect(() => {
    let count = 0
    const intervalId = setInterval(() => {
      setSelectedId((isSelectedId) =>
        isSelectedId === maxId ? 0 : isSelectedId + 1
      )
      count++
      if (count === winner + choices.length) {
        setLoading(false)
        clearInterval(intervalId)
      }
    }, 500)
  }, [])

  const back = () => {
    setShowResult(false)
  }
  return (
    <>
      {isLoading ? <p>Tirage en cours...</p> : <p>Le gagnant est</p>}
      <List list={choices} isSelectedId={isSelectedId} theme={theme} />
      <button className="btn btn-secondary" onClick={back}>
        Modifier ✍️
      </button>
    </>
  )
}

export default DrawResult
