import { useEffect, useState } from 'react'

const DEFAULT_TIME = {
  second: 0,
  millisecond: 0,
}

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState(DEFAULT_TIME)

  useEffect(() => {
    let intervalId

    if (isRunning) {
      const clickingTime = new Date().getTime()
      const currentShowedSecond = time.second
      const currentShowedMillisecond = time.millisecond

      intervalId = setInterval(() => {
        const currentTime = new Date().getTime()
        const passedTime = currentTime - clickingTime
        const passedSecond = new Date(passedTime).getSeconds()
        const passedMillisecond = new Date(passedTime).getMilliseconds()
        const finalMillisecond =
          (currentShowedMillisecond + passedMillisecond) % 1000
        const convertedSecondFromMillisecond = Math.floor(
          (currentShowedMillisecond + passedMillisecond) / 1000,
        )
        const finalSecond =
          currentShowedSecond + passedSecond + convertedSecondFromMillisecond

        setTime({
          second: finalSecond,
          millisecond: finalMillisecond,
        })
      }, 100)
    }

    return () => clearInterval(intervalId)
  }, [isRunning, time.millisecond, time.second])

  const handleFirstButton = () => {
    setIsRunning(!isRunning)
  }

  const handleResetButton = () => {
    setIsRunning(false)
    setTime(DEFAULT_TIME)
  }

  return (
    <div>
      <p>
        {time.second}s {time.millisecond}ms
      </p>
      <div>
        <button
          className="mr-2 border border-black p-2"
          onClick={handleFirstButton}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button className="border border-black p-2" onClick={handleResetButton}>
          Reset
        </button>
      </div>
    </div>
  )
}
