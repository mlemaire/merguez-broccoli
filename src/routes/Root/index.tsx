import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import BgTheme from '../../components/BgTheme'
import { ThemeProvider, ElementsDrawProvider } from '../../utils/context'
import Footer from '../../components/Footer'
import React from 'react'

function Root() {
  return (
    <>
      <ElementsDrawProvider>
        <ThemeProvider>
          <Header />
          <div>
            <Outlet />
          </div>
          <Footer />
          <BgTheme />
        </ThemeProvider>
      </ElementsDrawProvider>
    </>
  )
}

export default Root
