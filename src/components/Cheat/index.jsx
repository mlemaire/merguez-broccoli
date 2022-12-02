import { useState } from 'react'
import { useElementsDraw } from '../../utils/hooks'

import './style.css'

function Cheat() {
  const [showModal, setShowModal] = useState(false)
  const { elementsDraw, removeElementsDraw, updateElementDraw } =
    useElementsDraw()

  return (
    <>
      <button onClick={() => setShowModal(true)} aria-label="tricher">
        🥸
      </button>
      <div className={showModal ? 'block' : 'hidden'}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-white z-30 rounded-lg">
          <p>😱 Tu vas vraiment tricher? 🥺</p>
          <p>Alors selectionne qui ne peut être tiré au sort</p>
          <select>
            <option>Choisir la valeur à ne pas sélectionner</option>
            {elementsDraw.map((el) => (
              <option>{el}</option>
            ))}
          </select>
          <button aria-label="Validate your cheat">🤫</button>
        </div>
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-slate-900 opacity-70 z-20 cursor-pointer"
          onClick={() => setShowModal(false)}
        ></div>
      </div>
    </>
  )
}

export default Cheat
