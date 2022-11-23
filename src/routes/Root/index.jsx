import { Outlet } from 'react-router-dom'
import Header from './../../components/Header'
import BgTheme from './../../components/BgTheme'
import { ThemeProvider } from './../../utils/context'
import GlobalStyle from '../../utils/style/GlobalStyle'
import Footer from '../../components/Footer'

function Root() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
        <BgTheme />
      </ThemeProvider>
    </>
  )
}

export default Root
