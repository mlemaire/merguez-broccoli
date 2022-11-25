import { useTheme } from '../../utils/hooks'

function Footer() {
  const { theme, toogleTheme } = useTheme()
  return (
    <div
      className={`p-4 fixed bottom-0 left-0 w-full flex justify-center items-center text-white ${
        theme === 'broccoli' ? 'bg-emerald-800' : 'bg-red-600'
      }`}
    >
      <p>Plutôt Merguez ou Broccoli ?</p>
      <div className="toogle-btn">
        <label htmlFor="toogleTheme" onClick={() => toogleTheme()}>
          {' '}
          changer de thème
        </label>
        <input
          type="checkbox"
          checked={theme === 'broccoli' ? 'checked' : ''}
          readOnly={true}
          id="toogleTheme"
          className="h-0 w-0 opacity-0 invisible"
        />
      </div>
    </div>
  )
}

export default Footer
