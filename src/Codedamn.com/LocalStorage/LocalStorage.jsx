import { useState } from 'react'

export default function LocalStorage() {
  const [count, setCount] = useState(() => +localStorage.getItem('count') || 0)
  localStorage.setItem('count', count)

  return (
    <div className="m-2">
      <h1 aria-live="polite">Count: {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="border border-black p-2"
        aria-label="+1"
      >
        +
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="border border-black p-2"
        aria-label="-1"
      >
        -
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
