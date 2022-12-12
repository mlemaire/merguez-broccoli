import React from 'react'
import { useTheme } from '../../utils/hooks'
import githubMark from '../../assets/github-mark-white.svg'

function Footer() {
  const { theme, toogleTheme } = useTheme()
  return (
    <div
      className={`p-4 fixed bottom-0 left-0 w-full flex flex-col items-center text-white ${
        theme === 'broccoli' ? 'bg-emerald-800' : 'bg-red-600'
      }`}
    >
      <div className="flex items-center">
        <p>Plutôt Merguez ou Broccoli ?</p>
        <div className="toogle-btn">
          <label htmlFor="toogleTheme" onClick={() => toogleTheme()}>
            {' '}
            changer de thème
          </label>
          <input
            type="checkbox"
            checked={theme === 'broccoli' ? true : false}
            readOnly={true}
            id="toogleTheme"
            className="h-0 w-0 opacity-0"
            //TODO: add accessible for change value with the keyboard
          />
        </div>
      </div>
      <a
        href="https://github.com/mlemaire/merguez-broccoli"
        target="_blank"
        className="flex items-center hover:underline"
      >
        <img
          src={githubMark}
          alt="repo github"
          height={20}
          width={20}
          className="mr-2"
        />
        Code source
      </a>
    </div>
  )
}

export default Footer
