import React from 'react'
import { useTheme } from '../../utils/hooks'
import Broccoli from '../../assets/broccoli.svg'
import Merguez from '../../assets/merguez.svg'

function BgTheme() {
  const { theme } = useTheme()
  return (
    <img
      className="fixed -bottom-44 -left-96 h-full opacity-40 -z-10 max-w-none"
      alt={theme === 'broccoli' ? 'Broccoli' : 'Merguez'}
      aria-hidden="true"
      src={theme === 'broccoli' ? Broccoli : Merguez}
    />
    // <img src={process.env.PUBLIC_URL + `/images/twitter.svg`} alt="logo facebook"/>
  )
}

export default BgTheme
