// https://www.greatfrontend.com/questions/user-interface/transfer-list/solution
// https://www.greatfrontend.com/questions/user-interface/transfer-list-ii/solution
import { useState, useEffect, useCallback, useRef, useContext } from 'react'

export default function TransferList({ data }) {
  const [items, setItems] = useState(data)
  const [checkedIds, setCheckedIds] = useState(() => {
    return new Set([])
  })

  const list1Items = items.filter((item) => item.listId === 1)
  const list2Items = items.filter((item) => item.listId === 2)

  const handleTransferAll = (direction) => {
    setItems((items) => {
      return items.map((item) => {
        return { ...item, listId: direction === 'rtl' ? 1 : 2 }
      })
    })
  }

  const handleCheck = (id) => {
    setCheckedIds((c) => {
      const newSet = new Set(c)
      newSet.has(id) ? newSet.delete(id) : newSet.add(id)
      return newSet
    })
  }

  const handleTransfer = (direction) => {
    const affectedIds =
      direction === 'rtl'
        ? list2Items
            .filter((item) => checkedIds.has(item.id))
            .map((item) => item.id)
        : list1Items
            .filter((item) => checkedIds.has(item.id))
            .map((item) => item.id)

    setItems((items) => {
      return items.map((item) => {
        if (affectedIds.includes(item.id)) {
          return { ...item, listId: direction === 'rtl' ? 1 : 2 }
        }
        return item
      })
    })
  }

  return (
    <div className="m-2 flex divide-x-2">
      <ul className="px-4">
        {list1Items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              checked={checkedIds.has(item.id)}
              onChange={() => handleCheck(item.id)}
            />
            <label htmlFor={item.id}>{item.label}</label>
          </li>
        ))}
      </ul>
      <div className="px-4">
        <button
          className="block border border-black px-2 py-0.5"
          onClick={() => handleTransferAll('rtl')}
        >
          {'<<'}
        </button>
        <button
          className="block border border-black px-2 py-0.5"
          onClick={() => handleTransfer('rtl')}
        >
          {'<'}
        </button>
        <button
          className="block border border-black px-2 py-0.5"
          onClick={() => handleTransfer('ltr')}
        >
          {'>'}
        </button>
        <button
          className="block border border-black px-2 py-0.5"
          onClick={() => handleTransferAll('ltr')}
        >
          {'>>'}
        </button>
      </div>
      <ul className="px-4">
        {list2Items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              checked={checkedIds.has(item.id)}
              onChange={() => handleCheck(item.id)}
            />
            <label htmlFor={item.id}>{item.label}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}
