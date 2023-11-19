import { useState, useEffect } from 'react'
import { cn } from '../../util'

const config = {
  red: {
    duration: 1500,
    next: 'green',
    bgClass: 'bg-red-500',
  },
  yellow: {
    duration: 500,
    next: 'red',
    bgClass: 'bg-yellow-500',
  },
  green: {
    duration: 1000,
    next: 'yellow',
    bgClass: 'bg-green-500',
  },
}

export default function TrafficLight() {
  const [activeColor, setActiveColor] = useState('red')
  const [activeLightTime, setActiveLightTime] = useState(0)

  useEffect(() => {
    const timeoutId = setTimeout(
      () => setActiveColor(config[activeColor].next),
      config[activeColor].duration,
    )

    setActiveLightTime(0)

    return () => clearTimeout(timeoutId)
  }, [activeColor])

  useEffect(() => {
    const intervalId = setInterval(
      () => setActiveLightTime((a) => a + 100),
      100,
    )

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section>
      {Object.keys(config).map((color) => (
        <div
          key={color}
          className={cn(
            'flex h-32 w-32 items-center justify-center rounded-full bg-gray-300',
            color === activeColor && config[activeColor].bgClass,
          )}
          aria-label={`Current light: ${activeColor}`}
          aria-hidden={color !== activeColor}
          //  indicates that the content of the element may be updated dynamically and should be announced by screen readers.
          aria-live="polite"
        >
          {color === activeColor && (
            <p className="text-2xl">{activeLightTime}</p>
          )}
        </div>
      ))}
    </section>
  )
}
