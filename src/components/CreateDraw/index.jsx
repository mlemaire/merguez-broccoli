import { useState } from 'react'

function CreateDraw({ choices, setChoices, setShowResult }) {
  const [inputValue, setInputValue] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    addChoice(inputValue)
    setInputValue('')
  }

  const addChoice = (newChoice) => {
    setChoices([...choices, newChoice])
  }

  const removeChoices = () => setChoices([])

  const showResult = () => {
    if (!choices.length) return
    setShowResult(true)
  }

  return (
    <>
      <h2>Tirage au sort</h2>
      <p>
        Ajoutez plusieurs éléments à tirer au sort, puis cliquez sur "Tirer au
        sort"
      </p>
      <form onSubmit={(e) => handleClick(e)}>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="Ex: Merguez [Enter] Broccoli [Enter]"
        />
        <button>+</button>
      </form>
      <button onClick={removeChoices} disabled={!choices.length}>
        Tout supprimer
      </button>
      {choices?.map((choice, i) => (
        <p key={`choice-${i}`}>{choice}</p>
      ))}
      <button onClick={showResult} disabled={!choices.length}>
        Tirer au sort
      </button>
    </>
  )
}

export default CreateDraw
