import { useEffect, useState } from 'react'
import { useElementsDraw, useTheme } from '../../utils/hooks'
import List from '../List'
import Loader from '../Loader'

function DrawResult({ setShowResult }) {
  const { elementsDraw } = useElementsDraw()
  const { theme } = useTheme()
  const [isLoading, setLoading] = useState(true)
  const [isSelectedId, setSelectedId] = useState(null)
  const [isCurrentId, setCurrentId] = useState(0)

  const maxId = elementsDraw.length - 1

  const chooseWinner = () => {
    setLoading(true)
    const winner = Math.floor(Math.random() * elementsDraw.length)

    let count = 0

    const intervalId = setInterval(() => {
      setCurrentId((isCurrentId) => {
        if (
          count > elementsDraw.length &&
          (winner === 0 ? isCurrentId === maxId : isCurrentId === winner - 1)
        ) {
          setSelectedId(winner)
          setLoading(false)
          clearInterval(intervalId)
          return null
        }
        return isCurrentId === maxId ? 0 : isCurrentId + 1
      })
      count++
    }, 500)
  }

  useEffect(() => {
    chooseWinner()
  }, [])

  const back = () => {
    setShowResult(false)
  }

  const restartDraw = () => {
    setSelectedId(null)
    setCurrentId(0)
    chooseWinner()
  }
  return (
    <>
      {isLoading ? <Loader /> : <h2 className="h-10 block">Le gagnant est</h2>}

      <List
        isSelectedId={isSelectedId}
        isCurrentId={isCurrentId}
        theme={theme}
      />
      <div className="flex flex-col justify-center sm:flex-row">
        <button
          className="btn btn-secondary mb-4 sm:mr-4 sm:mb-0"
          onClick={back}
        >
          ⎌ Modifier
        </button>
        <button className="btn btn-secondary" onClick={restartDraw}>
          ⇤ Nouveau tirage
        </button>
      </div>
    </>
  )
}

export default DrawResult
