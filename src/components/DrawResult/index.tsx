import { useEffect, useState } from 'react'
import { useElementsDraw, useTheme } from '../../utils/hooks'
import List from '../List'
import Loader from '../Loader'

type IProps = {
  setShowResult: (boolean: boolean) => void
}

function DrawResult({ setShowResult }: IProps) {
  const { elementsDraw } = useElementsDraw()
  const { theme } = useTheme()
  const [isLoading, setLoading] = useState(true)
  const [isSelectedId, setSelectedId] = useState<number | null>(null)
  const [isCurrentId, setCurrentId] = useState<number | null>(0)

  const maxId = elementsDraw.length - 1

  const chooseWinner = () => {
    setLoading(true)
    let winner = Math.floor(Math.random() * elementsDraw.length)

    if (elementsDraw[winner].cheat) {
      if (winner < maxId) {
        winner++
      } else {
        winner = 0
      }
    }

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
        return isCurrentId !== maxId && isCurrentId !== null
          ? isCurrentId + 1
          : 0
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
          className="btn btn-text--xl btn--large btn-secondary mb-4 sm:mr-4 sm:mb-0"
          onClick={back}
          disabled={isLoading}
        >
          ⎌ Modifier
        </button>
        <button
          className="btn btn-text--xl btn--large btn-primary"
          onClick={restartDraw}
          disabled={isLoading}
        >
          ⇤ Nouveau tirage
        </button>
      </div>
    </>
  )
}

export default DrawResult
