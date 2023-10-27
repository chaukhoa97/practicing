import { useEffect, useState } from 'react'

const getTime = () => {
  const eventTime = new Date()
  const seconds = eventTime.getSeconds()
  const minutes = eventTime.getMinutes()
  const hours = eventTime.getHours()
  return { seconds, minutes, hours }
}

export default function AnalogClock() {
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  })
  const { seconds, minutes, hours } = time

  const secondsPercentage = seconds / 60
  const minutesPercentage = (minutes + secondsPercentage) / 60
  const hoursPercentage = ((hours % 12) + minutesPercentage) / 12

  const secondsAngle = secondsPercentage * 360
  const minutesAngle = minutesPercentage * 360
  const hourAngle = hoursPercentage * 360

  useEffect(() => {
    const { seconds, minutes, hours } = getTime()
    setTime({ seconds, minutes, hours })

    const timeInterval = setInterval(() => {
      const { seconds, minutes, hours } = getTime()
      setTime({ seconds, minutes, hours })
    }, 1000)

    return () => clearInterval(timeInterval)
  }, [])

  return (
    <div className="relative m-2 h-80 w-80 rotate-180 rounded-full border-4 border-black">
      <div className="rotate-180">{JSON.stringify(time)}</div>
      <div
        className="absolute left-40 top-40 h-1/5 origin-[top_center] border-[3px]"
        style={{
          transform: `rotate(${hourAngle}deg)`,
        }}
      />
      <div
        className="absolute left-40 top-40 h-1/4 origin-[top_center] border-2"
        style={{
          transform: `rotate(${minutesAngle}deg)`,
        }}
      />
      <div
        className="absolute left-40 top-40 h-1/3 origin-[top_center] border"
        style={{
          transform: `rotate(${secondsAngle}deg)`,
        }}
      />
    </div>
  )
}
