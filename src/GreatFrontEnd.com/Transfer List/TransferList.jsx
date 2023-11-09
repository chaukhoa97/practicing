import { useState, useEffect, useCallback, useRef, useContext } from 'react'

export default function TransferList({ data }) {
  const [itemLists, setItemLists] = useState(data)
  const [checkedIds, setCheckedIds] = useState(() => {
    return { list1: new Set(), list2: new Set() }
  })

  const handleCheck = (id) => {
    setCheckedIds((c) => {
      const newIds = { list1: new Set(c.list1), list2: new Set(c.list2) }
      const itemInList1 = itemLists.list1.find((item) => item.id === id)
      if (itemInList1) {
        newIds.list1.has(id) ? newIds.list1.delete(id) : newIds.list1.add(id)
      } else {
        newIds.list2.has(id) ? newIds.list2.delete(id) : newIds.list2.add(id)
      }
      return newIds
    })
  }

  const handleTransferAll = (direction) => {
    if (direction === 'rtl') {
      setItemLists((d) => {
        return { list1: [...d.list1, ...d.list2], list2: [] }
      })
    } else {
      setItemLists((d) => {
        return { list1: [], list2: [...d.list2, ...d.list1] }
      })
    }
  }

  const handleTransfer = (direction) => {
    if (direction === 'rtl') {
      setItemLists((d) => {
        const transferedItems = itemLists.list2.filter((item) =>
          checkedIds.list2.has(item.id),
        )
        const unchangedItems = itemLists.list2.filter(
          (item) => !checkedIds.list2.has(item.id),
        )
        return {
          list1: [...d.list1, ...transferedItems],
          list2: unchangedItems,
        }
      })
    } else {
      setItemLists((d) => {
        const transferedItems = itemLists.list1.filter((item) =>
          checkedIds.list1.has(item.id),
        )
        const unchangedItems = itemLists.list1.filter(
          (item) => !checkedIds.list1.has(item.id),
        )
        return {
          list1: unchangedItems,
          list2: [...d.list2, ...transferedItems],
        }
      })
    }
  }

  return (
    <div className="m-2 flex divide-x-2">
      <ul className="px-4">
        {itemLists.list1.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              checked={checkedIds.list1.has(item.id)}
              onChange={() => handleCheck(item.id)}
            />
            <label htmlFor={item.id}>{item.label}</label>
          </li>
        ))}
      </ul>
      <div className="px-4">
        <button
          className="block border border-black p-2"
          onClick={() => handleTransferAll('rtl')}
        >
          {'<<'}
        </button>
        <button
          className="block border border-black p-2"
          onClick={() => handleTransfer('rtl')}
        >
          {'<'}
        </button>
        <button
          className="block border border-black p-2"
          onClick={() => handleTransfer('ltr')}
        >
          {'>'}
        </button>
        <button
          className="block border border-black p-2"
          onClick={() => handleTransferAll('ltr')}
        >
          {'>>'}
        </button>
      </div>
      <ul className="px-4">
        {itemLists.list2.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              checked={checkedIds.list2.has(item.id)}
              onChange={() => handleCheck(item.id)}
            />
            <label htmlFor={item.id}>{item.label}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}
