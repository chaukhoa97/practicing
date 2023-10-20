// https://www.greatfrontend.com/questions/user-interface/temperature-converter
import { useState } from 'react'

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')

  const handleCelsiusInputChange = (e) => {
    setCelsius(e.target.value)
    if (e.target.value !== '') {
      setFahrenheit(Math.round((e.target.value * 1.8 + 32) * 10000) / 10000)
    } else {
      setFahrenheit('')
    }
  }

  const handleFahrenheitInputChange = (e) => {
    setFahrenheit(e.target.value)
    if (e.target.value !== '') {
      setCelsius(Math.round(((e.target.value - 32) * 10000) / 1.8) / 10000)
    } else {
      setCelsius('')
    }
  }

  return (
    <div className="m-4 flex items-baseline">
      <div className="flex flex-col border border-gray-400">
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusInputChange}
          className="border-b border-gray-400 p-2 text-center"
        />
        <div className="w-full bg-gray-100 p-2 text-center">Celsius</div>
      </div>
      <span>=</span>
      <div className="flex flex-col border border-gray-400">
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitInputChange}
          className="border-b border-gray-400 p-2 text-center"
        />
        <div className="w-full bg-gray-100 p-2 text-center">Fahrenheit</div>
      </div>
    </div>
  )
}
