import { useEffect, useState } from 'react'

function DrawResult({ choices, setChoices }) {
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  })
  return (
    <>
      {isLoading ? <p>Tirage en cours...</p> : <p>Le gagnant est</p>}
      <ul>
        {choices.map((choice, i) => (
          <li key={`el-${i}`}>{choice}</li>
        ))}
      </ul>
    </>
  )
}

export default DrawResult
