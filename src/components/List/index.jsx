import { useElementsDraw } from '../../utils/hooks'

function List({ isCurrentId = null, isSelectedId = null, theme }) {
  const { elementsDraw } = useElementsDraw()

  return (
    <ul className="flex flex-row gap-4 justify-center p-0">
      {elementsDraw?.map((el, i) => (
        <li
          key={`choice-${i}`}
          className={`border border-slate-500 p-4 list-none -translate-y-1/4 ${
            i === isCurrentId ? ' animate-bounce-fast' : ''
          } ${
            i === isSelectedId && theme === 'broccoli'
              ? 'bg-emerald-800 text-white border-emerald-800'
              : i === isSelectedId
              ? 'bg-red-800 text-white border-red-800'
              : ''
          }`}
          //transform: translateY(-25%);
        >
          {el}
        </li>
      ))}
    </ul>
  )
}

export default List
