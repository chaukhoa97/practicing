import { useState, useEffect, useCallback, useRef, useContext } from 'react'

function Modal202401016({ isOpen, onClose, children }) {
  const modalRef = useRef()

  return (
    isOpen && (
      <>
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50"
          ref={modalRef}
          onClick={(e) => e.target === modalRef.current && onClose()}
        >
          {children}
        </div>
      </>
    )
  )
}

export default function ModalExample() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    modalIsOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [modalIsOpen])

  return (
    <div
      className="m-2 h-[200vh] active:border-none"
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.code === 'Escape') {
          setModalIsOpen(false)
        }
      }}
    >
      <button onClick={() => setModalIsOpen(true)}>Open the modal </button>
      <Modal202401016
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      >
        <div
          className="relative z-10 border border-black bg-white p-4"
          role="dialog"
          aria-modal="true"
        >
          <p>Hello</p>
          <button className="border p-2" onClick={() => setModalIsOpen(false)}>
            Close the modal
          </button>
        </div>
      </Modal202401016>
    </div>
  )
}
