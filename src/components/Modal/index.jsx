import { useEffect, useRef } from 'react'

function Modal({ children, showModal, setShowModal, id }) {
  const modalRef = useRef()

  const close = () => {
    setShowModal(false)
  }

  const handleTabKey = (e) => {
    const focusableElementsArray = modalRef.current.querySelectorAll(
      '[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )

    const firstElement = focusableElementsArray[0]
    const lastElement =
      focusableElementsArray[focusableElementsArray.length - 1]

    if (!e.shiftKey && document.activeElement !== firstElement) {
      firstElement.focus()
      return e.preventDefault()
    }

    if (e.shiftKey && document.activeElement !== lastElement) {
      lastElement.focus()
      e.preventDefault()
    }
  }

  const keyListenersMap = new Map([
    [27, close],
    [9, handleTabKey],
  ])

  //   Need refacto here
  useEffect(() => {
    const focusableElementsArray = modalRef.current.querySelectorAll(
      '[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElementsArray[0]

    if (showModal && firstElement) firstElement.focus()
  }, [showModal])

  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode)
      return listener && listener(e)
    }
    document.addEventListener('keydown', keyListener)

    return () => document.removeEventListener('keydown', keyListener)
  }, [])

  return (
    <>
      <div
        id={id}
        role="dialog"
        aria-labelledby="tricher lors du tirage au sort"
        aria-hidden={showModal ? false : true}
        aria-modal="true"
        tabIndex="-1"
        className={showModal ? 'block' : 'hidden'}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full  sm:w-1/2 min-h-1/2 bg-white z-30 sm:rounded-lg "
          role="document"
          ref={modalRef}
        >
          <button type="button" aria-label="Fermer la modal" onClick={close}>
            X
          </button>
          {children}
        </div>
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 bg-slate-900/70 z-20 cursor-pointer`}
          onClick={close}
        ></div>
      </div>
    </>
  )
}

export default Modal
