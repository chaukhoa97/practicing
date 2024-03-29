// https://frontendeval.com/questions/modal-overlay
import { useRef, useEffect, useState } from 'react'

function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef()

  // Focus the modal when it mounts to make keyboard event work
  useEffect(() => {
    if (isOpen) {
      modalRef.current.focus()
    }
  }, [isOpen])

  // Prevent scrolling when modal is shown
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return isOpen ? (
    // inset-0 applies top: 0, right: 0, bottom: 0, left: 0
    // those will make a positioned element stretch to cover the whole viewport
    // https://tailwindcss.com/docs/top-right-bottom-left
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      ref={modalRef}
      onClick={(e) => modalRef.current === e.target && onClose()} // Allow clicking outside to close the modal
      tabIndex="0" // Make the `div` focusable
      onKeyDown={(e) => e.code === 'Escape' && onClose()}
    >
      <div className="flex max-h-full max-w-[90%] flex-col overflow-auto bg-white p-4 md:max-w-2xl">
        <button
          className="self-end border border-black px-2 py-0.5"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  ) : null
}

export default function ModalExample() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="m-2">
      <button
        className="mb-8 bg-blue-500 px-4 py-2 text-white"
        onClick={() => setShowModal(true)}
      >
        Show offer
      </button>
      <p className="text-9xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut adipisci
        dolor voluptatem, sed fugiat ratione ullam nostrum eos! Eaque id
        excepturi nulla ad voluptate!
      </p>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-4xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            natus molestias quis accusamus in exercitationem ipsa nemo unde nam
            sapiente.
          </p>
          <button
            className="bg-green-500 px-4 py-2 text-white"
            onClick={() => setShowModal(false)}
          >
            Accept offer
          </button>
        </div>
      </Modal>
    </div>
  )
}
