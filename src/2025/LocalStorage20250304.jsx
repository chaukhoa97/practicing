import { useState } from 'react'

export default function LocalStorage() {
  const [count, setCount] = useState(
    () => Number(localStorage.getItem('count')) || 0,
  )

  const updateCount = (value) => {
    const newCount = count + value
    setCount(newCount)
    localStorage.setItem('count', newCount)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => updateCount(-1)}>Decrement</button>
      <button onClick={() => updateCount(1)}>Increment</button>
    </div>
  )
}
