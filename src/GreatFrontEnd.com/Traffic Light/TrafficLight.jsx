import { useState, useEffect } from 'react'
import { cn } from '../../util'

export default function TrafficLight() {
  const [activeColor, setActiveColor] = useState('red')
  const [activeLightTime, setActiveLightTime] = useState(0)

  useEffect(() => {
    setActiveLightTime(0)
    switch (activeColor) {
      case 'red':
        setTimeout(() => setActiveColor('green'), 1500)
        break
      case 'yellow':
        setTimeout(() => setActiveColor('red'), 500)
        break
      case 'green':
        setTimeout(() => setActiveColor('yellow'), 1000)
        break
    }
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
      <div
        className={cn(
          'flex h-32 w-32 items-center justify-center rounded-full bg-gray-300',
          activeColor === 'red' && 'bg-red-500',
        )}
      >
        {activeColor === 'red' && <p className="text-2xl">{activeLightTime}</p>}
      </div>
      <div
        className={cn(
          'flex h-32 w-32 items-center justify-center rounded-full bg-gray-300',
          activeColor === 'yellow' && 'bg-yellow-500',
        )}
      >
        {activeColor === 'yellow' && (
          <p className="text-2xl">{activeLightTime}</p>
        )}
      </div>
      <div
        className={cn(
          'flex h-32 w-32 items-center justify-center rounded-full bg-gray-300',
          activeColor === 'green' && 'bg-green-500',
        )}
      >
        {activeColor === 'green' && (
          <p className="text-2xl">{activeLightTime}</p>
        )}
      </div>
    </section>
  )
}
