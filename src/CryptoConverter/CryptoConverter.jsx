import { useEffect, useRef, useState } from 'react'

const CURRENCIES = ['USD', 'EUR', 'GBP', 'CNY', 'JPY']
const API_ENDPOINT = 'https://api.frontendeval.com/fake/crypto/'

export default function CryptoConverter() {
  const [currencyAmount, setCurrencyAmount] = useState(1000)
  const [currency, setCurrency] = useState('USD')
  const [cryptoOutput, setCryptoOutput] = useState(0)
  const [priceChangeColor, setPriceChangeColor] = useState('text-black')

  const latestRate = useRef(0)

  useEffect(() => {
    let ignore = false

    const fetchData = async () => {
      const res = await fetch(API_ENDPOINT + currency)
      const data = await res.json()

      if (!ignore) {
        if (latestRate.current !== 0) {
          if (data.value > latestRate.current)
            setPriceChangeColor('text-green-500')
          else setPriceChangeColor('text-red-500')
        }

        setCryptoOutput(Math.round(data.value * currencyAmount * 100) / 100)

        latestRate.current = data.value
      }
    }

    fetchData()
    const intervalId = setInterval(() => fetchData(), 3000)

    return () => {
      clearInterval(intervalId)
      ignore = true
    }
  }, [currency, currencyAmount])

  return (
    <div className="m-2">
      <div className="m-4">
        <input
          className="border border-black p-2"
          type="number"
          value={currencyAmount}
          onChange={(e) => setCurrencyAmount(e.target.value)}
          aria-label="currency amount"
        />
        <select
          className="border border-black p-2"
          aria-label="currency"
          onChange={(e) => {
            setCurrency(e.target.value)
            setPriceChangeColor('text-black')
            latestRate.current = 0
          }}
        >
          {CURRENCIES.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <p aria-live="polite">
        {cryptoOutput} WUC{' '}
        <span className={priceChangeColor}>Rate: {latestRate.current}</span>
      </p>
    </div>
  )
}
