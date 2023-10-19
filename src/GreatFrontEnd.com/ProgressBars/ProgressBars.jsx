// https://www.greatfrontend.com/questions/user-interface/progress-bars

import { useState } from 'react'

export default function ProgressBars() {
  const [barCount, setBarCount] = useState(0)
  const barCountArray = Array(barCount).fill(0)

  return (
    <div className="m-4">
      <button
        className="mb-2 border border-black p-2"
        onClick={() => setBarCount(barCount + 1)}
      >
        Add
      </button>
      {barCountArray.map((_, index) => (
        <div
          className="my-2 h-8 border border-gray-400 bg-gray-300 text-white"
          key={index}
        >
          <div
            className="progress-bars flex h-full items-center bg-green-600"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      ))}
    </div>
  )
}
