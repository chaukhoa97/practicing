import { useState, useEffect, useRef, useCallback } from 'react'
import { cn } from '../util'

const TransferList2 = () => {
  const [leftCol, setLeftCol] = useState([
    {
      value: 'HTML',
      checked: true,
    },
    {
      value: 'JavaScript',
      checked: true,
    },
    {
      value: 'CSS',
      checked: false,
    },
    {
      value: 'TypeScript',
      checked: false,
    },
  ])
  const [rightCol, setRightCol] = useState([
    {
      value: 'React',
      checked: true,
    },
    {
      value: 'Angular',
      checked: true,
    },
    {
      value: 'Vue',
      checked: true,
    },
    {
      value: 'Svelte',
      checked: true,
    },
  ])

  const selectedRight = rightCol.filter((item) => item.checked)
  const selectedLeft = leftCol.filter((item) => item.checked)
  const leftInput = useRef()

  const handleMoveLeft = () => {
    setRightCol(rightCol.filter((item) => !item.checked))
    setLeftCol([...leftCol, ...selectedRight])
  }

  const handleMoveRight = () => {
    setLeftCol(leftCol.filter((item) => !item.checked))
    setRightCol([...rightCol, ...selectedLeft])
  }

  const selectAllLeft = () => {
    setLeftCol(
      leftCol.map((item) => {
        return { ...item, checked: true }
      }),
    )
  }

  const unselectAllLeft = () => {
    setLeftCol(
      leftCol.map((item) => {
        return { ...item, checked: false }
      }),
    )
  }

  const selectAllRight = () => {
    setRightCol(
      rightCol.map((item) => {
        return { ...item, checked: true }
      }),
    )
  }

  const unselectAllRight = () => {
    setRightCol(
      rightCol.map((item) => {
        return { ...item, checked: false }
      }),
    )
  }

  return (
    <div className="flex p-2">
      <div>
        <form
          className="flex flex-col gap-2 border-b py-2"
          onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.target)
            const { newLeft } = Object.fromEntries(formData.entries())
            if (leftCol.findIndex((item) => item.value === newLeft) < 0) {
              setLeftCol([
                ...leftCol,
                {
                  value: newLeft,
                  checked: false,
                },
              ])
              leftInput.current.value = ''
            } else {
              alert('Duplicate value')
            }
          }}
        >
          <input ref={leftInput} name="newLeft" className="border p-2" />
        </form>
        <div className="flex flex-col gap-2 border-b py-2">
          {selectedLeft.length} / {leftCol.length} Selected
          <label>
            <input
              type="checkbox"
              checked={selectedLeft.length === leftCol.length}
              onChange={
                selectedLeft.length === leftCol.length
                  ? unselectAllLeft
                  : selectAllLeft
              }
            />
            Select all items
          </label>
        </div>
        <div className="flex flex-col gap-2">
          {leftCol.map((item) => (
            <label htmlFor={item.value} key={item.value}>
              <input
                type="checkbox"
                checked={item.checked}
                id={item.value}
                onChange={() => {
                  const newLeftCol = [...leftCol]
                  const clickedItem = newLeftCol.find(
                    (item2) => item2.value === item.value,
                  )
                  clickedItem.checked = !clickedItem.checked
                  setLeftCol(newLeftCol)
                }}
              />
              {item.value}
            </label>
          ))}
        </div>
      </div>
      <div className="flex flex-col border-x px-4">
        <button className="border border-b p-2" onClick={handleMoveLeft}>
          {'<'}
        </button>
        <button className="border border-b p-2" onClick={handleMoveRight}>
          {'>'}
        </button>
      </div>
      <div>
        <div className="flex flex-col gap-2 border-b py-2">
          {selectedRight.length} / {rightCol.length} Selected
          <label>
            <input
              type="checkbox"
              checked={selectedRight.length === rightCol.length}
              onChange={
                selectedRight.length === rightCol.length
                  ? unselectAllRight
                  : selectAllRight
              }
            />
            Select all items
          </label>
        </div>
        <div className="flex flex-col gap-2">
          {rightCol.map((item) => (
            <label htmlFor={item.value} key={item.value}>
              <input
                type="checkbox"
                checked={item.checked}
                id={item.value}
                onChange={() => {
                  const newRightCol = [...rightCol]
                  const clickedItem = newRightCol.find(
                    (item2) => item2.value === item.value,
                  )
                  clickedItem.checked = !clickedItem.checked
                  setRightCol(newRightCol)
                }}
              />
              {item.value}
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TransferList2
