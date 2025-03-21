// https://www.greatfrontend.com/questions/user-interface/progress-bars

import { useState } from 'react'
import { cn } from '../util'

export default function ProgressBars() {
  const [barCount, setBarCount] = useState(0)
  const [activeBarIndexes, setActiveBarIndexes] = useState([0, 1, 2])

  const barIndexes = Array.from({ length: barCount }, (_, i) => i)

  return (
    <div className="m-4">
      <button
        className="mb-2 border border-black p-2"
        onClick={() => setBarCount(barCount + 1)}
      >
        Add
      </button>
      {barIndexes.map((index) => {
        return (
          <div
            className="my-2 h-4 border border-gray-400 bg-gray-300"
            key={index}
          >
            <div
              className={cn(
                'h-full origin-left',
                activeBarIndexes.includes(index) &&
                  'bar-filling-up bg-green-600',
              )}
              onAnimationEnd={() => {
                setActiveBarIndexes((prev) => [...prev, prev.at(-1) + 1])
              }}
              role="progress bar"
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        )
      })}
    </div>
  )
}
