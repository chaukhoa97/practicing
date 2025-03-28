import { useState } from 'react'
import { cn } from '../util'

const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

const DEFAULT_DATA = Array(9).fill(null)

const haveAllElements = (target, source) => {
  for (let i = 0; i < source.length; i++) {
    if (!target.includes(source[i])) return false
  }
  return true
}

const getIndexes = (element, array) => {
  return array
    .map((item, index) => {
      if (item === element) return index
    })
    .filter((item) => item !== undefined)
}

export default function TicTacToe() {
  const [data, setData] = useState(DEFAULT_DATA)

  const [isPlayerXTurn, setIsPlayerXTurn] = useState(true)
  const [result, setResult] = useState(null)

  const handleClick = (index) => {
    if (!data[index] && !result) {
      setIsPlayerXTurn(!isPlayerXTurn)

      setData((prev) => {
        const newArray = [...prev]
        newArray.splice(index, 1, isPlayerXTurn ? 'X' : 'O')

        let xIndexes = getIndexes('X', newArray)
        let oIndexes = getIndexes('O', newArray)

        for (let i = 0; i < WIN_CONDITIONS.length; i++) {
          if (haveAllElements(xIndexes, WIN_CONDITIONS[i])) setResult('X')
          if (haveAllElements(oIndexes, WIN_CONDITIONS[i])) setResult('O')
        }

        if (xIndexes.length + oIndexes.length === 9) setResult('draw')

        return newArray
      })
    }
  }

  const reset = () => {
    setData(DEFAULT_DATA)
    setResult(null)
    setIsPlayerXTurn(true)
  }

  return (
    <div className="m-2">
      {/* indicates that the content of the element may be updated dynamically and should be announced by screen readers. */}
      {result && (
        <div aria-live="polite">
          {result === 'X' || result === 'O' ? (
            <p>Player {result} win!</p>
          ) : (
            <p>Draw</p>
          )}
        </div>
      )}
      <div className="grid max-w-max grid-cols-3">
        {data.map((item, index) => (
          <button
            key={index}
            className={cn(
              'flex h-24 w-24 items-center justify-center border-black text-4xl',
              index < 6 && 'border-b',
              [0, 1, 3, 4, 6, 7].includes(index) && 'border-r',
            )}
            onClick={() => handleClick(index)}
            disabled={data[index] || result}
            {...(!item && { 'aria-label': 'empty' })}
          >
            {item}
          </button>
        ))}
      </div>
      <button className="mt-4 border border-black p-2" onClick={reset}>
        Reset
      </button>
    </div>
  )
}
