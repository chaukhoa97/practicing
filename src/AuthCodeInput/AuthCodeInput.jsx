import { useState, useRef } from 'react'

const DEFAULT_INPUTS = ['', '', '', '']
const VALID_INPUT_VALUES = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

export default function AuthCodeInput() {
  const [inputs, setInputs] = useState(DEFAULT_INPUTS)
  const [activeIndex, setActiveIndex] = useState(0)
  const activeRef = useRef(null)

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs]

    if (VALID_INPUT_VALUES.includes(event.target.value)) {
      newInputs.splice(index, 1, event.target.value)
      setActiveIndex(activeIndex + 1)
    }

    if (event.code === 'Backspace') {
      newInputs.splice(index, 1, '')
      setActiveIndex(activeIndex - 1)
    }

    activeRef.current?.focus()
    setInputs(newInputs)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(JSON.stringify(inputs))
  }

  return (
    <form
      className="m-2 flex flex-col items-center justify-center gap-6"
      onSubmit={handleSubmit}
    >
      <div className="space-x-4 text-2xl">
        {inputs.map((input, index) => (
          <input
            name={`input ${index}`}
            key={index}
            value={input}
            ref={activeIndex === index ? activeRef : null}
            onChange={(e) => handleInputChange(index, e)}
            onKeyDown={(e) => handleInputChange(index, e)}
            className="h-16 w-16 border border-black p-3"
          />
        ))}
      </div>
      <button className="block border border-black p-2">Submit</button>
    </form>
  )
}
