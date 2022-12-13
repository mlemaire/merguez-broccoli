import { useRef, useState } from 'react'
import { useElementsDraw, useFetch } from '../../utils/hooks'

import Loader from '../Loader'
import Modal from '../Modal'

function Cheat() {
  const [showModal, setShowModal] = useState(false)
  const { elementsDraw, setCheat } = useElementsDraw()
  const { data, isLoading, error } = useFetch({
    url: 'https://api.giphy.com/v1/gifs/random?api_key=WZymHDV26dR2IOzDba9N6KCfnC7JKydg&tag=cheating+course&rating=g',
    cond: showModal,
  })
  const cheatingGifUrl = data?.data?.images?.downsized_medium?.url
  const cheatRef = useRef<HTMLSelectElement>(null)

  const handleClick = () => {
    cheatRef.current && setCheat(cheatRef.current.value)
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
        title="triche va y c'est gratuit"
        className="btn btn-secondary absolute -bottom-2 left-1/2 z-0 -translate-x-1/2 -rotate-3 transition-transform duration-300 ml-16 hover:translate-y-7"
      >
        🥸
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        id="modal"
        customClass={'prose text-center mt-4'}
      >
        <h2>😱 Tu vas vraiment tricher? 🥺</h2>
        <p>Alors selectionne qui ne peut être tiré au sort</p>
        <select
          disabled={!elementsDraw.length}
          ref={cheatRef}
          className="rounded-md p-2 mr-2 border border-slate-300 h-11"
        >
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
          className="btn btn-primary"
          onClick={handleClick}
          disabled={!elementsDraw.length}
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
