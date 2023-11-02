import { useEffect, useState } from 'react'

export default function DigitalClock() {
  const [formattedTime, setFormattedTime] = useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      const eventTime = new Date()

      setFormattedTime(
        eventTime.toLocaleString(undefined, {
          minimumIntegerDigits: 2,
          timeStyle: 'medium',
          hour12: false,
        }),
      )
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <time className="m-2 flex w-56 items-center justify-center border-4 border-gray-400 bg-black p-4 text-white">
      <p
        className="text-4xl"
        // Similar to AnalogClock, the internals of the clock are for presentation purposes so they should be hided to screen readers.
        aria-hidden={true}
      >
        {formattedTime}
      </p>
    </time>
  )
}
