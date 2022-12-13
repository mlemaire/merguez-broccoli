import { useElementsDraw } from '../../utils/hooks'

type Iprops = {
  isCurrentId?: number | null
  isSelectedId?: number | null
  isEditable?: boolean
  theme?: any // TODO look that
}

type IElementDraw = {
  value: string
  cheat: boolean
}

function List({
  isCurrentId = null,
  isSelectedId = null,
  isEditable = false,
  theme,
}: Iprops) {
  const { elementsDraw, removeElementsDraw, updateElementDraw } =
    useElementsDraw()

  const handleClick = (e: IElementDraw) => {
    removeElementsDraw(e)
  }
  const updateDraw = (i: number, el: string) => {
    updateElementDraw(i, el)
  }

  return (
    <ul className="flex flex-row gap-4 justify-center p-0 flex-wrap">
      {elementsDraw?.map((el, i) => (
        <li
          key={`draw-${i}`}
          className={`border border-slate-500 p-4 list-none -translate-y-1/4  ${
            i === isCurrentId ? ' animate-bounce-fast' : ''
          } ${
            i === isSelectedId && theme === 'broccoli'
              ? 'bg-emerald-800 text-white border-emerald-800'
              : i === isSelectedId
              ? 'bg-red-800 text-white border-red-800'
              : ''
          }`}
        >
          {isEditable ? (
            <>
              <input
                type="text"
                size={10}
                defaultValue={el.value}
                onChange={(e) => updateDraw(i, e.target.value)}
                className="m-0 border-b border-slate-300 bg-transparent"
              />

              <button className="ml-2 my-0" onClick={() => handleClick(el)}>
                ❌
              </button>
            </>
          ) : (
            el.value
          )}
        </li>
      ))}
    </ul>
  )
}

export default List
