import { useState, useEffect } from 'react'
import { cn } from '../util'

const LIGHTS = [
  {
    bgColorClass: 'bg-red-500',
    duration: 1000,
  },
  {
    bgColorClass: 'bg-yellow-500',
    duration: 500,
  },
  {
    bgColorClass: 'bg-green-500',
    duration: 1500,
  },
]

function TrafficLight20250311() {
  const [currentLightIdx, setCurrentLightIdx] = useState(2)

  useEffect(() => {
    const timeoutId = setTimeout(
      () => setCurrentLightIdx(currentLightIdx === 0 ? 2 : currentLightIdx - 1),
      LIGHTS[currentLightIdx].duration,
    )

    return () => clearTimeout(timeoutId)
  }, [currentLightIdx])

  return (
    <div>
      {LIGHTS.map((light, index) => (
        <div
          key={light.bgColorClass}
          className={cn(
            'size-[100px] rounded-full border border-black',
            currentLightIdx === index && light.bgColorClass,
          )}
        ></div>
      ))}
    </div>
  )
}

export default TrafficLight20250311
