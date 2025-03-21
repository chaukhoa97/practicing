import { useState, useEffect, useRef, useCallback } from 'react'

function formatDate(date) {
  const year = date.getFullYear()
  // `padStart` Ensure '2023-01-03' instead of '2023-1-3'
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  return `${year}-${month}-${day}`
}

export default function FlightBooker20250308() {
  const [flightType, setFlightType] = useState('one-way')
  const [flightDates, setFlightDates] = useState({
    first: '',
    return: '',
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        alert(
          flightType === 'one-way'
            ? `You have booked a one-way flight on ${flightDates.first}`
            : `You have booked a return flight, departing on ${flightDates.first} and returning on ${flightDates.return}`,
        )
      }}
    >
      <select
        value={flightType}
        onChange={(e) => setFlightType(e.target.value)}
        className="border border-black p-1"
      >
        <option value="one-way">One-way flight</option>
        <option value="return">Return flight</option>
      </select>
      <input
        type="date"
        name="first"
        className="border border-black p-1"
        value={flightDates.first}
        min={formatDate(new Date())}
        onChange={(e) =>
          setFlightDates({ ...flightDates, [e.target.name]: e.target.value })
        }
      />
      <input
        type="date"
        name="return"
        className="border border-black p-1"
        value={flightDates.return}
        onChange={(e) =>
          setFlightDates({ ...flightDates, [e.target.name]: e.target.value })
        }
        hidden={flightType === 'one-way'}
        min={formatDate(new Date(Date.now() + 24 * 60 * 60 * 1000))}
      />
      <button>Submit</button>
    </form>
  )
}
