function List({ list, isSelectedId = null, theme }) {
  return (
    <ul className="flex flex-row gap-4 justify-center p-0">
      {list?.map((el, i) => (
        <li
          key={`choice-${i}`}
          className={`border border-slate-500 p-4 list-none ${
            i === isSelectedId && theme === 'broccoli'
              ? 'text-white bg-emerald-800 border-emerald-800'
              : i === isSelectedId
              ? 'text-white bg-red-800 border-red-800'
              : ''
          }`}
        >
          {el}
        </li>
      ))}
    </ul>
  )
}

export default List
