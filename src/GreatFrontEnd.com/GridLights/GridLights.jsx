import { useState } from 'react'
import { cn } from '../../util'

const baseArray = Array.from({ length: 9 }, (_, i) => i)

export default function GridLights() {
  const [activeBoxIndexes, setActiveBoxIndexes] = useState([
    2, 3, 5, 7, 1, 8, 6,
  ])
  const [isReversing, setisReversing] = useState()

  if (activeBoxIndexes.length === 8) {
    isReversing || setisReversing(true)
  }

  if (isReversing) {
    const reversingInterval = setTimeout(() => {
      const newIndexes = [...activeBoxIndexes]
      newIndexes.pop()
      setActiveBoxIndexes(newIndexes)
    }, 300)

    if (activeBoxIndexes.length === 0) {
      setisReversing(false)
      clearTimeout(reversingInterval)
    }
  }

  const handleBoxClick = (index) => {
    setActiveBoxIndexes((prev) => {
      if (!prev.includes(index)) return [...prev, index]
      return prev
    })
  }

  return (
    <div className="grid w-64 grid-cols-3 gap-2">
      {baseArray.map((_, i) => {
        if (i === 4) return <div key={i} className=""></div>
        return (
          <button
            key={i}
            className={cn(
              'h-20 w-20 border border-black',
              activeBoxIndexes.includes(i) && 'bg-green-600',
            )}
            aria-label="grid light box"
            onClick={() => handleBoxClick(i)}
          ></button>
        )
      })}
    </div>
  )
}
