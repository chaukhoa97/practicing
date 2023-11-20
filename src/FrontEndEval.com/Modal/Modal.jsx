// https://frontendeval.com/questions/modal-overlay
import { useState, useEffect, useCallback, useRef, useContext } from 'react'

function Modal({ show, onConfirm, onClose, description, confirmText }) {
  const handleXButton = () => {
    onClose()
  }
  const handleConfirm = () => {
    onConfirm()
    onClose()
  }

  return show ? (
    <div className="absolute h-screen w-screen bg-slate-400">
      <div className="mx-auto max-w-xl border border-black p-4">
        <button
          className="border border-black px-2 py-1"
          onClick={handleXButton}
        >
          X
        </button>
        <div className="flex flex-col items-center justify-center">
          <p>{description}</p>
          <button
            className="mt-4 border border-black px-2 py-1"
            onClick={handleConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  ) : null
}

export default function ModalExample() {
  const [offerIsAccepted, setOfferIsAccepted] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="m-2">
      {offerIsAccepted ? (
        <p>Offer accepted</p>
      ) : (
        <button
          className="border border-black p-2"
          onClick={() => setShowModal(true)}
        >
          Show offer
        </button>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => setOfferIsAccepted(true)}
        description="Click the button below to accept our amazing offer"
        confirmText="Accept offer"
      />
    </div>
  )
}
