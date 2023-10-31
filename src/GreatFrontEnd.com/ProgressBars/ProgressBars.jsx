// https://www.greatfrontend.com/questions/user-interface/progress-bars

import { useState } from 'react'
import { cn } from '../../util'

export default function ProgressBars() {
  const [barCount, setBarCount] = useState(0)
  const [previousBarFilled, setPreviousBarFilled] = useState(true)
  const [mostRecentBarCreateTime, setMostRecentBarCreateTime] = useState(null)

  const barCountArray = Array(barCount).fill(0)

  const handleAdd = () => {
    setBarCount(barCount + 1)
    const now = new Date().getTime()
    if (now - mostRecentBarCreateTime < 2000)
      setMostRecentBarCreateTime(new Date().getTime())

    setTimeout(() => {
      setPreviousBarFilled(true)
    }, 2000)
  }

  const condition = previousBarFilled

  return (
    <div className="m-4">
      <button className="mb-2 border border-black p-2" onClick={handleAdd}>
        Add
      </button>
      {barCountArray.map((_, index) => (
        <div
          className="my-2 h-8 border border-gray-400 bg-gray-300 text-white"
          key={index}
        >
          <div
            className={cn(
              'flex h-full items-center',
              condition && 'progress-bar bg-green-600',
            )}
            role="progress bar"
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      ))}
    </div>
  )
}
