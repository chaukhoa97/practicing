import { useState, useEffect, useCallback, useRef, useContext } from 'react'

export default function LocalStorage20240115() {
  const [count, setCount] = useState(
    () => parseFloat(localStorage.getItem('count')) || 0,
  )

  return (
    <div className="m-2">
      <h1 className="text-xl font-bold" aria-live="polite">
        Count: {count}
      </h1>
      <button
        className="border p-2"
        onClick={() => setCount(count + 1)}
        aria-label="Increase count by 1"
      >
        +
      </button>
      <button
        className="border p-2"
        onClick={() => setCount(count - 1)}
        aria-label="Decrease count by 1"
      >
        -
      </button>
    </div>
  )
}
