import { useState } from 'react'

export default function MortgageCalculator() {
  const [results, setResults] = useState({
    monthlyPaymentAmount: 0,
    totalPaymentAmount: 0,
    totalInterestPaid: 0,
  })

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const { loanAmount, loanTerm, interestRate } = Object.fromEntries(
      formData.entries(),
    )

    const monthlyInterestRate = interestRate / 1200
    const totalPaymentNumber = loanTerm * 12

    const monthlyPaymentAmount =
      (loanAmount *
        (monthlyInterestRate *
          (1 + monthlyInterestRate) ** totalPaymentNumber)) /
      ((1 + monthlyInterestRate) ** totalPaymentNumber - 1).toFixed(2)

    const totalPaymentAmount = (
      monthlyPaymentAmount * totalPaymentNumber
    ).toFixed(2)

    const totalInterestPaid = (totalPaymentAmount - loanAmount).toFixed(2)

    setResults({
      monthlyPaymentAmount,
      totalPaymentAmount,
      totalInterestPaid,
    })
  }

  return (
    <>
      <form className="m-2" onSubmit={handleFormSubmit}>
        <div className="mb-2">
          <label htmlFor="loan-amount">Loan Amount:</label>
          <input
            type="number"
            min={0}
            className="ml-2 border border-black"
            name="loanAmount"
            id="loan-amount"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="loan-term">Loan Term (years):</label>
          <input
            type="number"
            min={0}
            className="ml-2 border border-black"
            name="loanTerm"
            id="loan-term"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="interest-rate">Interest Rate (%):</label>
          <input
            type="number"
            min={0}
            className="ml-2 border border-black"
            name="interestRate"
            id="interest-rate"
          />
        </div>
        <button className="m-3 block border border-black p-2">Calculate</button>
      </form>
      <section>
        <div>
          Monthly Payment Amount:{' '}
          <span className="font-bold">${results.monthlyPaymentAmount}</span>
        </div>
        <div>
          Total Payment Amount:{' '}
          <span className="font-bold">${results.totalPaymentAmount}</span>
        </div>
        <div>
          Total Interest Paid:{' '}
          <span className="font-bold">${results.totalInterestPaid}</span>
        </div>
      </section>
    </>
  )
}
