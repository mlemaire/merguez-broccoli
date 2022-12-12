import React from 'react'
import { useState } from 'react'

import CreateDraw from '../../components/CreateDraw'
import DrawResult from '../../components/DrawResult'

function Draw() {
  const [showResult, setShowResult] = useState(false)

  return (
    <div className="prose max-w-xl bg-white/70 m-auto rounded-lg p-4 text-center">
      {showResult ? (
        <DrawResult setShowResult={setShowResult} />
      ) : (
        <CreateDraw setShowResult={setShowResult} />
      )}
    </div>
  )
}

export default Draw
