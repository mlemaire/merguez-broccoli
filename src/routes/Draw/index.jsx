import { useState } from 'react'
import styled from 'styled-components'

import CreateDraw from './../../components/CreateDraw'
import DrawResult from './../../components/DrawResult'

const Wrapper = styled.div`
  text-align: center;
  padding: 5rem;
  background-color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: auto;
  border-radius: 10px;
`

function Draw() {
  const [choices, setChoices] = useState([])
  const [showResult, setShowResult] = useState(false)

  return (
    <Wrapper>
      {showResult ? (
        <DrawResult choices={choices} setChoices={setChoices} />
      ) : (
        <CreateDraw
          choices={choices}
          setChoices={setChoices}
          setShowResult={setShowResult}
        />
      )}
    </Wrapper>
  )
}

export default Draw
