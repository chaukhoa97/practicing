import { useState, useEffect, useCallback, useRef, useContext } from 'react'

// Format the date to the format of '2023-01-14'
const formatDate = (timeStamp) => {
  const year = timeStamp.getFullYear()
  const month = `${timeStamp.getMonth() + 1}`.padStart(2, '0')
  const date = timeStamp.getDate()

  return `${year}-${month}-${date}`
}

export default function FlightBooker20240109() {
  const [formData, setFormData] = useState({
    flightType: 'oneWay',
    departureDate: '',
    returnDate: '',
  })

  const now = new Date()
  const formattedNow = formatDate(now)

  const handleSubmit = (e) => {
    e.preventDefault()

    let alertString

    switch (formData.flightType) {
      case 'oneWay':
        alertString = `You have booked a one-way flight on ${formData.departureDate}`
        break
      case 'return':
        alertString = `You have booked flights on ${formData.departureDate} and ${formData.returnDate}`
        break
      default:
        alertString = `The flight type doesn't match`
    }

    alert(alertString)
  }

  return (
    <form className="m-2 flex max-w-lg flex-col gap-4" onSubmit={handleSubmit}>
      <select
        name="flightType"
        className="border p-2"
        onChange={(e) => {
          setFormData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
          })
        }}
      >
        <option name="oneWay" value="oneWay">
          One-way flight
        </option>
        <option name="return" value="return">
          Return flight
        </option>
      </select>
      <input
        className="border p-2"
        type="date"
        name="departureDate"
        required
        value={formData.departureDate}
        onChange={(e) => {
          setFormData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
          })
        }}
        min={formattedNow}
      />
      {formData.flightType === 'return' && (
        <input
          className="border p-2"
          type="date"
          name="returnDate"
          min={formData.departureDate}
          value={formData.returnDate}
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, [e.target.name]: e.target.value }
            })
          }}
          required
        />
      )}
      <button>Submit</button>
    </form>
  )
}
