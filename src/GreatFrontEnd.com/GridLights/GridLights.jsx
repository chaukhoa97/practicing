import { useState } from 'react'
import { cn } from '../../util'

const baseArray = Array.from({ length: 9 }, (_, i) => i)

export default function GridLights() {
  const [activeBoxIndexes, setActiveBoxIndexes] = useState([
    2, 3, 5, 7, 1, 8, 6,
  ])

  const handleBoxClick = (index) => {
    const newIndexes = [...activeBoxIndexes]
    if (!newIndexes.includes(index)) {
      newIndexes.push(index)
    }
    setActiveBoxIndexes(newIndexes)

    if (newIndexes.length === 8) {
      const reversingInterval = setInterval(() => {
        // Use the callback version of setState to ensure we get the most updated value
        setActiveBoxIndexes((prev) => {
          const newIndexes = [...prev]
          newIndexes.pop()

          if (prev.length === 0) {
            clearInterval(reversingInterval)
          }

          return newIndexes
        })
      }, 100)
    }
  }

  return (
    <div className="grid w-64 grid-cols-3 gap-2">
      {baseArray.map((_, i) => {
        if (i === 4) return <div key={i} />
        return (
          <button
            key={i}
            className={cn(
              'h-20 w-20 border border-black',
              activeBoxIndexes.includes(i) && 'bg-green-600',
            )}
            aria-label={`box ${i}`}
            onClick={() => handleBoxClick(i)}
          ></button>
        )
      })}
    </div>
  )
}
