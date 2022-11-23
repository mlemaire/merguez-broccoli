import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTheme } from '../../utils/hooks'
import colors from '../../utils/style/colors'

const NavContainer = styled.header`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledLink = styled(Link)`
  font-family: 'Pacifico', cursive;
  color: ${({ theme }) =>
    theme === 'broccoli' ? colors.primary : colors.secondary};
  text-decoration: none;
`

function Header() {
  const { theme } = useTheme()
  return (
    <NavContainer>
      <StyledLink to="/" theme={theme}>
        <h1>{theme === 'broccoli' ? 'Broccoli' : 'Merguez'}</h1>
      </StyledLink>
    </NavContainer>
  )
}

export default Header
