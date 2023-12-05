import { useState } from 'react'
import { cn } from '../../util'

const INITIAL_VALUE = 0
const OPERATIONS = ['/2', '-1', '+1', 'x2']

export default function UndoableCounter() {
  const [history, setHistory] = useState([])
  const [cached, setCached] = useState([])
  const latestValue = history.at(-1)?.newValue || INITIAL_VALUE

  const handleOperationEvents = (type) => {
    switch (type) {
      case '/2':
        setHistory([
          ...history,
          { operation: '/2', oldValue: latestValue, newValue: latestValue / 2 },
        ])
        break
      case '-1':
        setHistory([
          ...history,
          { operation: '-1', oldValue: latestValue, newValue: latestValue - 1 },
        ])
        break
      case '+1':
        setHistory([
          ...history,
          { operation: '+1', oldValue: latestValue, newValue: latestValue + 1 },
        ])
        break
      case 'x2':
        setHistory([
          ...history,
          { operation: 'x2', oldValue: latestValue, newValue: latestValue * 2 },
        ])
        break
    }
  }

  const handleUndo = () => {
    const newHistory = [...history]
    const removedElement = newHistory.pop()
    setHistory(newHistory)

    setCached([...cached, removedElement])
  }

  const handleRedo = () => {
    const newCached = [...cached]
    const removedElement = newCached.pop()
    setCached(newCached)

    setHistory([...history, removedElement])
  }

  return (
    <div className="m-2 flex max-w-lg flex-col items-center">
      <div className="mb-4">
        <button
          className="border border-black p-2 disabled:border-red-500"
          onClick={handleUndo}
          disabled={history.length === 0}
        >
          Undo
        </button>
        <button
          className="mx-2 border border-black p-2 disabled:border-red-500"
          onClick={handleRedo}
          disabled={cached.length === 0}
        >
          Redo
        </button>
        <button
          className="border border-black p-2 disabled:border-red-500"
          disabled={history.length === 0}
          onClick={() => setHistory([])}
        >
          Reset
        </button>
      </div>
      <hr></hr>
      <div className="mb-4 flex items-center">
        <span className="order-1">{latestValue}</span>
        {OPERATIONS.map((operation, index) => (
          <button
            key={operation}
            className={cn('mx-2 border border-black p-2', `order-${index}`)}
            onClick={() => handleOperationEvents(operation)}
          >
            {operation}
          </button>
        ))}
      </div>
      <div className="w-full">
        <div className="flex justify-center">
          <p className="basis-1/3 text-center">Operation</p>
          <p className="basis-1/3 text-center">Old</p>
          <p className="basis-1/3 text-center">New</p>
        </div>
        {history.map(({ operation, oldValue, newValue }, index) => (
          <div
            key={index}
            className="flex justify-center border-t border-black"
          >
            <span className="basis-1/3 text-center">{operation}</span>
            <span className="basis-1/3 text-center">{oldValue}</span>
            <span className="basis-1/3 text-center">{newValue}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
