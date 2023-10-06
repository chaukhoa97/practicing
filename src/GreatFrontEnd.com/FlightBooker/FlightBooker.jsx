import { useState } from 'react'

const TODAY = formatDate(new Date())
const DAY_IN_SECONDS = 24 * 60 * 60 * 1000

function formatDate(date) {
  const year = date.getFullYear()
  // `padStart` Ensure '2023-01-03' instead of '2023-1-3'
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  return `${year}-${month}-${day}`
}

export default function FlightBooker() {
  const [flightType, setFlightType] = useState('one-way')
  const [departureDate, setDepartureDate] = useState(
    formatDate(new Date(Date.now() + DAY_IN_SECONDS)), // Tomorrow
  )
  const [returnDate, setReturnDate] = useState(departureDate)

  function handleSubmit(e) {
    e.preventDefault()
    flightType === 'one-way'
      ? window.alert(`You have booked a one-way flight on ${departureDate}`)
      : window.alert(
          `You have booked a return flight, departing on ${departureDate} and returning on ${returnDate}`,
        )
  }

  return (
    <form onSubmit={handleSubmit}>
      <select
        name="type"
        className="block"
        value={flightType}
        onChange={(e) => setFlightType(e.target.value)}
      >
        <option value="one-way">One-way flight</option>
        <option value="return">Return flight</option>
      </select>
      <input
        type="date"
        className="block"
        name="departure"
        value={departureDate}
        onChange={(event) => {
          setDepartureDate(event.target.value)
        }}
        min={TODAY}
        // Since the <input> fields don't have visible labels, aria-labels can be used to label the fields for screenreaders.
        aria-label="Departure date"
      />
      {flightType === 'return' && (
        <input
          type="date"
          className="block"
          name="return"
          value={returnDate}
          min={departureDate}
          onChange={(event) => {
            setReturnDate(event.target.value)
          }}
          aria-label="Return date"
        />
      )}
      <button>Submit</button>
    </form>
  )
}
