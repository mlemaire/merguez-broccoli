import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../hooks'
import colors from './colors'

const StyledGlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${(props) =>
          props.isThemeMode
            ? colors.backgroundPrimary
            : colors.backgroundPrimary};
      }
      
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

    a {
        text-decoration: none;
      }
`

function GlobalStyle() {
  const { theme } = useTheme()

  return <StyledGlobalStyle isThemeMode={theme === 'broccoli'} />
}

export default GlobalStyle
