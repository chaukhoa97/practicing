import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'

const ModalApp = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="p-4 text-3xl">
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        setIsOpen={setIsOpen}
      >
        <div className="flex size-[300px] items-center justify-center">
          Content from parent
        </div>
      </Modal>
      <button
        className="border border-black p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        Open
      </button>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde,
      quasi et iste nemo iure dicta autem consectetur quibusdam, quod dolorem
      obcaecati praesentium soluta recusandae, nostrum ducimus. Deleniti quos
      natus mollitia esse officia modi. Amet omnis, assumenda aspernatur,
      voluptatem quod quo sequi deserunt suscipit voluptate maxime sint eligendi
      dolorum rem incidunt at! Quas autem eveniet minus maxime rem officiis
      omnis beatae, maiores exercitationem tenetur quo sed voluptas dicta
      repudiandae hic molestias pariatur excepturi quod tempore labore ipsam.
      Voluptates quisquam unde illo nesciunt culpa repellendus accusamus hic.
      Maiores iusto sint voluptatibus amet eaque neque vel atque sapiente.
      Doloremque quis suscipit voluptatum. Libero sed praesentium sequi. Tempora
      at a tenetur? Quae ad esse fugiat. Alias, minus voluptatem ullam sunt
      ipsum quo et ab! Reprehenderit totam debitis vero natus facilis
      architecto, molestiae commodi soluta numquam esse adipisci suscipit minus
      vel cupiditate, quasi magnam impedit odit tempora, quas doloremque est
      nesciunt ipsa obcaecati. Accusantium porro earum dicta omnis aspernatur
      tenetur nemo sit fugiat eaque aperiam quod praesentium nihil officiis
      perspiciatis illo, fugit eveniet quaerat aliquam amet sed. Laudantium
      accusantium deleniti temporibus optio perspiciatis quas minima doloremque
      autem quasi inventore dignissimos, beatae itaque laboriosam animi! Quasi
      aperiam quisquam voluptatum eum ut ex totam dolorem accusamus.
    </div>
  )
}

const Modal = ({ children, isOpen, onOpen, onClose, setIsOpen }) => {
  isOpen && onOpen && onOpen()
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'unset'
  }

  const overlayRef = useRef()

  return isOpen
    ? createPortal(
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          ref={overlayRef}
          onClick={(e) => {
            if (e.target === overlayRef.current) setIsOpen(false)
          }}
        >
          <div className="bg-white">
            <div className="flex justify-end">
              <button
                className="border border-black p-1"
                onClick={() => onClose()}
              >
                Close
              </button>
            </div>
            {children}
          </div>
        </div>,
        document.querySelector('#root'),
      )
    : null
}

export default ModalApp
