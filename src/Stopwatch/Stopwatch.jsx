import { useEffect, useState } from 'react'

const DEFAULT_TIME = {
  second: 0,
  millisecond: 0,
}

const MS_IN_SECOND = 1000

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false)
  const [displayedTime, setDisplayedTime] = useState(DEFAULT_TIME)

  useEffect(() => {
    let intervalId

    if (isRunning) {
      const clickingTime = new Date().getTime()
      const currentDisplayedSecond = displayedTime.second
      const currentDisplayedMillisecond = displayedTime.millisecond

      intervalId = setInterval(() => {
        const currentTime = new Date().getTime()

        const passedTime = currentTime - clickingTime
        const passedSecond = new Date(passedTime).getSeconds()
        const passedMillisecond = new Date(passedTime).getMilliseconds()

        const finalMillisecond =
          (currentDisplayedMillisecond + passedMillisecond) % MS_IN_SECOND
        const finalSecond =
          currentDisplayedSecond +
          passedSecond +
          Math.floor(
            (currentDisplayedMillisecond + passedMillisecond) / MS_IN_SECOND,
          )

        setDisplayedTime({
          second: finalSecond,
          millisecond: finalMillisecond,
        })
      }, 100)
    }

    return () => clearInterval(intervalId)
  }, [isRunning, displayedTime.millisecond, displayedTime.second])

  const handleResetButton = () => {
    setIsRunning(false)
    setDisplayedTime(DEFAULT_TIME)
  }

  return (
    <div>
      <p>
        {displayedTime.second}s {displayedTime.millisecond}ms
      </p>
      <div>
        <button
          className="mr-2 border border-black p-2"
          onClick={() => {
            setIsRunning(!isRunning)
          }}
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
