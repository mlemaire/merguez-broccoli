import { useState } from 'react'
import { useTheme, useElementsDraw } from '../../utils/hooks'
import List from '../List'

function CreateDraw({ setShowResult }) {
  const { elementsDraw, saveElementsDraw, removeElementsDraw } =
    useElementsDraw()
  const { theme } = useTheme()
  const [inputValue, setInputValue] = useState('')

  const addChoice = (e) => {
    e.preventDefault()
    saveElementsDraw(inputValue)
    setInputValue('')
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
      <form
        className="flex gap-2 justify-center"
        onSubmit={(e) => addChoice(e)}
      >
        <input
          className="h-10 w-60 p-2 rounded-md border border-slate-300"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="Ex: Merguez [Enter] Broccoli [Enter]"
        />
        <button
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
            onClick={removeElementsDraw}
            disabled={!elementsDraw.length}
          >
            Tout supprimer
          </button>
          <List />
        </>
      )}

      <button
        className="btn btn-secondary mt-8"
        onClick={showResult}
        disabled={!elementsDraw.length}
      >
        Tirer au sort
      </button>
    </>
  )
}

export default CreateDraw
