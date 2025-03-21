import { useState } from 'react'

export default function TemperatureConverter20250305() {
  const [celsius, setCelsius] = useState()
  const [fahrenheit, setFahrenheit] = useState()

  const handleCelsiusChange = (e) => {
    setCelsius(e.target.value)
    setFahrenheit(
      e.target.value
        ? Math.round((e.target.value * 1.8 + 32) * 10000) / 10000
        : null,
    )
  }

  const handleFahrenheitChange = (e) => {
    setFahrenheit(e.target.value)
    setCelsius(
      e.target.value
        ? Math.round(((e.target.value - 32) / 1.8) * 10000) / 10000
        : null,
    )
  }

  return (
    <form>
      <label>
        Celsius
        <input
          type="number"
          className="border border-black"
          value={celsius}
          onChange={(e) => handleCelsiusChange(e)}
        />
      </label>
      <label>
        Fahrenheit
        <input
          type="number"
          className="border border-black"
          value={fahrenheit}
          onChange={(e) => handleFahrenheitChange(e)}
        />
      </label>
    </form>
  )
}
