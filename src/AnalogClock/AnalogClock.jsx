import { useEffect, useState } from 'react'

const getTime = () => {
  const timeStamp = new Date()
  const localeTimeString = timeStamp.toLocaleTimeString()
  const second = timeStamp.getSeconds()
  const minute = timeStamp.getMinutes()
  const hour = timeStamp.getHours()
  return { localeTimeString, second, minute, hour }
}

export default function AnalogClock() {
  const [time, setTime] = useState({
    second: 0,
    minute: 0,
    hour: 0,
  })
  const { second, minute, hour } = time

  const secondPercentage = second / 60
  const minutePercentage = (minute + secondPercentage) / 60
  const hourPercentage = ((hour % 12) + minutePercentage) / 12

  const secondAngle = secondPercentage * 360
  const minuteAngle = minutePercentage * 360
  const hourAngle = hourPercentage * 360

  const { localeTimeString } = getTime()

  useEffect(() => {
    const { second, minute, hour } = getTime()
    setTime({ second, minute, hour })

    const timeInterval = setInterval(() => {
      const { second, minute, hour } = getTime()
      setTime({ second, minute, hour })
    }, 1000)

    return () => clearInterval(timeInterval)
  }, [])

  return (
    <time
      className="relative m-2 h-80 w-80 rotate-180 rounded-full border-4 border-black"
      dateTime={localeTimeString}
    >
      <div className="rotate-180">{JSON.stringify(time)}</div>
      <div
        className="absolute left-40 top-40 h-1/5 origin-[top_center] border-[3px]"
        style={{
          transform: `rotate(${hourAngle}deg)`,
        }}
        // The clock hands are for presentation purposes so they should be hided to screen readers.
        aria-hidden={true}
      />
      <div
        className="absolute left-40 top-40 h-1/4 origin-[top_center] border-2"
        style={{
          transform: `rotate(${minuteAngle}deg)`,
        }}
        aria-hidden={true}
      />
      <div
        className="absolute left-40 top-40 h-1/3 origin-[top_center] border"
        style={{
          transform: `rotate(${secondAngle}deg)`,
        }}
        aria-hidden={true}
      />
    </time>
  )
}
