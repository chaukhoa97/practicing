import s from './a.module.css'
import { useState, useEffect, useRef, useCallback } from 'react'

export default function Stopwatch20250309() {
  const [isRunning, setIsRunning] = useState(false)
  const [startTime, setStartTime] = useState(0)
  const [shownTime, setShownTime] = useState(0)

  const handleFirstBtnClick = () => {
    if (isRunning) {
      setIsRunning(false)
    } else {
      setIsRunning(true)
      setStartTime(Date.now() - shownTime)
    }
  }

  const handleReset = () => {
    setIsRunning(false)
    setStartTime(0)
    setShownTime(0)
  }

  useEffect(() => {
    if (isRunning) {
      const timeoutId = setInterval(
        () => setShownTime(Date.now() - startTime),
        100,
      )

      return () => clearTimeout(timeoutId)
    }
  }, [isRunning, startTime])

  return (
    <div>
      <button className={s.btn} onClick={handleFirstBtnClick}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button className={s.btn} onClick={handleReset}>
        Reset
      </button>
      <p>{shownTime / 1000}</p>
    </div>
  )
}
