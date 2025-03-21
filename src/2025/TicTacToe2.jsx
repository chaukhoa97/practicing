import { useState, useEffect, useRef, useCallback } from 'react'

const baseGameBoard = Array(9).fill(null)
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

const TicTacToe2 = () => {
  const [gameBoard, setGameBoard] = useState(baseGameBoard)
  const [isPlayerXTurn, setIsPlayerXTurn] = useState(true)
  const [result, setResult] = useState() // Player X won, Player O won, Tie

  const handleClickCell = (index) => {
    if (!gameBoard[index] && !result) {
      const newGameBoard = [...gameBoard]
      isPlayerXTurn ? (newGameBoard[index] = 'X') : (newGameBoard[index] = 'O')

      // Set result based on win condition
      let indexesOfX = new Set()
      let indexesOfO = new Set()
      newGameBoard.forEach((item, index) => {
        if (item === 'X') {
          indexesOfX.add(index)
        } else if (item === 'O') {
          indexesOfO.add(index)
        }
      })

      if (
        WIN_CONDITIONS.some((condition) =>
          condition.every((item) => indexesOfX.has(item)),
        )
      ) {
        setResult('Player X won')
      } else if (
        WIN_CONDITIONS.some((condition) =>
          condition.every((item) => indexesOfO.has(item)),
        )
      ) {
        setResult('Player O won')
      } else if (indexesOfX.size + indexesOfO.size === gameBoard.length) {
        setResult('Tie')
      }

      // Update game
      setGameBoard(newGameBoard)
      setIsPlayerXTurn(!isPlayerXTurn)
    }
  }

  return (
    <div>
      <p>{result ? result : `Player ${isPlayerXTurn ? 'X' : 'O'} turn`}</p>
      <div className="grid size-[300px] grid-cols-3">
        {gameBoard.map((item, index) => (
          <button
            key={index}
            className="size-[100px] border border-black"
            onClick={() => handleClickCell(index)}
          >
            {item}
          </button>
        ))}
      </div>
      <button
        className="border border-black p-2"
        onClick={() => {
          setGameBoard(baseGameBoard)
          setResult(null)
          setIsPlayerXTurn(true)
        }}
      >
        Reset
      </button>
    </div>
  )
}

export default TicTacToe2
