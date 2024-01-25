import { useState, useEffect, useCallback, useRef, useContext } from 'react'

export default function TemperatureConverter20240117() {
  const [celsius, setCelsius] = useState()
  const [fahrenheit, setFahrenheit] = useState()

  return (
    <form className="m-2">
      <label>
        Celsius
        <input
          type="number"
          className="border p-2"
          value={celsius}
          onChange={(e) => {
            let fahrenheit = ''
            if (e.target.value) {
              fahrenheit = e.target.value * 1.8 + 32
              fahrenheit = Math.round(fahrenheit * 100) / 100
            }

            setCelsius(e.target.value)
            setFahrenheit(fahrenheit)
          }}
        />
      </label>
      <label>
        Fahrenheit
        <input
          type="number"
          className="border p-2"
          value={fahrenheit}
          onChange={(e) => {
            let celsius = ''
            if (e.target.value) {
              celsius = (e.target.value - 32) / 1.8
              celsius = Math.round(celsius * 100) / 100
            }

            setFahrenheit(e.target.value)
            setCelsius(celsius)
          }}
        />
      </label>
    </form>
  )
}
