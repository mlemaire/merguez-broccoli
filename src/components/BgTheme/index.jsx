import styled from 'styled-components'
import { useTheme } from '../../utils/hooks'
import Broccoli from './../../assets/broccoli.svg'
import Merguez from './../../assets/merguez.svg'

const StyledBackground = styled.img`
  position: fixed;
  bottom: -25%;
  left: -25%;
  width: 90%;
  opacity: 0.4;
  z-index: -1;
`

function BgTheme() {
  const { theme } = useTheme()
  return <StyledBackground src={theme === 'broccoli' ? Broccoli : Merguez} />
}

export default BgTheme
