import { useTheme } from '../../utils/hooks'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const SwitchModeButton = styled.button`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  position: relative;
  cursor: pointer;
  border-radius: 25px;
  border: none;
  &:before {
    transition: 0.4s;
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${colors.primary};
    border-radius: 50%;
  }
  &:has(input:checked):before {
    background-color: ${colors.secondary};
    transform: translateX(26px);
  }
`

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
}
`

function Footer() {
  const { theme, toogleTheme } = useTheme()
  return (
    <div>
      <p>Plutot Merguez ou Broccoli ?</p>
      <SwitchModeButton onClick={() => toogleTheme()}>
        <SwitchInput
          type="checkbox"
          checked={theme === 'broccoli' ? 'checked' : ''} //TODO: fix error
          readOnly={true}
        />
      </SwitchModeButton>
    </div>
  )
}

export default Footer
