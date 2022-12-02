import { useRef } from 'react'
import { useTheme, useElementsDraw } from '../../utils/hooks'
import Cheat from '../Cheat'
import List from '../List'

function CreateDraw({ setShowResult }) {
  const { elementsDraw, saveElementsDraw, removeAllElementsDraw } =
    useElementsDraw()
  const { theme } = useTheme()
  const inputRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    if (inputRef.current.value === '') return
    saveElementsDraw(inputRef.current.value)
    inputRef.current.value = ''
  }

  const showResult = () => {
    if (!elementsDraw.length) return
    setShowResult(true)
  }

  return (
    <>
      <h2>Tirage au sort</h2>
      <p>
        Ajoutez plusieurs éléments à tirer au sort, puis cliquez sur "Tirer au
        sort"
      </p>
      <form className="flex gap-2 justify-center" onSubmit={onSubmit}>
        <input
          className="h-10 w-60 p-2 rounded-md border border-slate-300"
          type="text"
          ref={inputRef}
          placeholder="Ex: Merguez [Enter] Broccoli [Enter]"
        />
        <button
          type="submit"
          className={`btn ${
            theme === 'broccoli' ? 'btn-primary-b' : 'btn-primary-m'
          } w-10`}
          theme={theme}
        >
          +
        </button>
      </form>
      {elementsDraw.length > 0 && (
        <>
          <button
            className="btn btn-tertiary"
            onClick={removeAllElementsDraw}
            disabled={!elementsDraw.length}
          >
            Tout supprimer
          </button>
          <List isEditable={true} />
        </>
      )}

      <button
        className="btn btn-secondary mt-8"
        onClick={showResult}
        disabled={!elementsDraw.length}
      >
        Tirer au sort
      </button>
      <Cheat />
    </>
  )
}

export default CreateDraw
