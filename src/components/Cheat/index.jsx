import { useRef, useState } from 'react'
import { useElementsDraw, useFetch } from '../../utils/hooks'

import Loader from '../Loader'
import Modal from '../Modal'

import './style.css'

function Cheat() {
  const [showModal, setShowModal] = useState(false)

  const { elementsDraw, setCheat } = useElementsDraw()

  const { data, isLoading, error } = useFetch({
    url: 'https://api.giphy.com/v1/gifs/random?api_key=WZymHDV26dR2IOzDba9N6KCfnC7JKydg&tag=cheating+course&rating=g',
    cond: showModal,
  })

  const cheatingGifUrl = data?.data?.images?.downsized_medium?.url
  const cheatRef = useRef()

  const handleClick = () => {
    setCheat(cheatRef.current.value)
    setShowModal(false)
  }

  if (error) {
    return <span>Oupsss 🙈</span>
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        aria-label="triche va y c'est gratuit"
        aria-controls="modal"
        className="p-4 focus:bg-slate-700"
      >
        🥸
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} id="modal">
        <p>😱 Tu vas vraiment tricher? 🥺</p>
        <p>Alors selectionne qui ne peut être tiré au sort</p>
        <select disabled={!elementsDraw.length} ref={cheatRef}>
          {elementsDraw.length ? (
            <option>Choisir la valeur à ne pas sélectionner</option>
          ) : (
            <option>Ajoute d'abord des éléments à selectionner</option>
          )}
          {elementsDraw.map((el, i) => (
            <option key={`opt-${i}`}>{el.value}</option>
          ))}
        </select>
        <button
          aria-label="Validate your cheat"
          className="p-4 focus:bg-slate-700"
          onClick={handleClick}
        >
          🤫
        </button>
        {isLoading ? (
          <Loader />
        ) : (
          <img className="m-auto my-4" src={cheatingGifUrl} alt="" />
        )}
      </Modal>
    </>
  )
}

export default Cheat
