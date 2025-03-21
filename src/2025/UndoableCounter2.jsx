import { useState, useEffect, useRef, useCallback } from 'react'

const UndoableCounter2 = () => {
  // the latest will be push at the end of the list
  // in UI, should be on reversed order, similar to a stack

  const [history, setHistory] = useState([
    {
      old: 0,
      operator: '+1',
      new: 1,
    },
    {
      old: 1,
      operator: '+10',
      new: 11,
    },
  ])

  const [undoHistory, setUndoHistory] = useState([])

  const latestInstance = history[history.length - 1]

  const handleMinus10 = () => {
    const newInstance = {
      old: latestInstance.new,
      operator: '-10',
      new: latestInstance.new - 10,
    }

    setHistory([...history, newInstance])
  }

  const handleMinus1 = () => {
    const newInstance = {
      old: latestInstance.new,
      operator: '-1',
      new: latestInstance.new - 1,
    }

    setHistory([...history, newInstance])
  }

  const handlePlus1 = () => {
    const newInstance = {
      old: latestInstance.new,
      operator: '+1',
      new: latestInstance.new + 1,
    }

    setHistory([...history, newInstance])
  }

  const handlePlus10 = () => {
    const newInstance = {
      old: latestInstance.new,
      operator: '+1',
      new: latestInstance.new + 10,
    }

    setHistory([...history, newInstance])
  }

  const handleUndo = () => {
    const newHistory = [...history]
    const latestUndo = newHistory.pop()

    setHistory(newHistory)
    setUndoHistory([...undoHistory, latestUndo])
  }

  const handleRedo = () => {
    const newUndoHistory = [...undoHistory]
    const latestUndo = newUndoHistory.pop()

    setUndoHistory(newUndoHistory)
    setHistory([...history, latestUndo])
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex w-full justify-center gap-2 border-b border-black pb-4">
        <button
          className="border border-black p-2 disabled:opacity-30"
          onClick={handleUndo}
          disabled={history.length === 0}
        >
          Undo
        </button>
        <button
          className="border border-black p-2 disabled:opacity-30"
          onClick={handleRedo}
          disabled={undoHistory.length === 0}
        >
          Redo
        </button>
      </div>
      <div className="mb-4 flex w-full items-center justify-center gap-2 border-b border-black pb-4">
        <button className="border border-black p-2" onClick={handleMinus10}>
          -10
        </button>
        <button className="border border-black p-2" onClick={handleMinus1}>
          -1
        </button>
        <p className="text-2xl font-bold" aria-live="polite">
          {latestInstance?.new || 0}
        </p>
        <button className="border border-black p-2" onClick={handlePlus1}>
          +1
        </button>
        <button className="border border-black p-2" onClick={handlePlus10}>
          +10
        </button>
      </div>
      <table className="border border-black">
        <caption>History</caption>
        <thead>
          <tr>
            <th className="border border-black">Old</th>
            <th className="border border-black">Operator</th>
            <th className="border border-black">New</th>
          </tr>
        </thead>
        {history.length > 0 && (
          <tbody>
            {[...history].reverse().map((item, index) => (
              <tr key={index}>
                {Object.entries(item).map(([k, v]) => (
                  <td key={k} className="border border-black">
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  )
}

export default UndoableCounter2
