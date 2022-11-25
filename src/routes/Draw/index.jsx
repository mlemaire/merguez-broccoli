import { useState } from 'react'

import CreateDraw from './../../components/CreateDraw'
import DrawResult from './../../components/DrawResult'

function Draw() {
  const [choices, setChoices] = useState([]) //TODO : maybe is better with useContext ?
  const [showResult, setShowResult] = useState(false)

  return (
    <div className="prose max-w-xl bg-white/70 m-auto rounded-lg p-4 text-center">
      {showResult ? (
        <DrawResult
          choices={choices}
          setChoices={setChoices}
          setShowResult={setShowResult}
        />
      ) : (
        <CreateDraw
          choices={choices}
          setChoices={setChoices}
          setShowResult={setShowResult}
        />
      )}
    </div>
  )
}

export default Draw
