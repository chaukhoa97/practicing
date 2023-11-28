import { useState, useEffect, useCallback, useRef, useContext } from 'react'

const DEFAULT_FORM_DATA = {
  name: '',
  email: '',
  dob: '',
  password: '',
}

export default function MultistepForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  let nextIsDisabled
  switch (step) {
    case 1:
      nextIsDisabled = formData.name.length === 0
      break
    case 2:
      nextIsDisabled = formData.email.length === 0
      break
    case 3:
      nextIsDisabled = formData.dob.length === 0
      break
    case 4:
      break
    default:
      throw new Error('invalid case')
  }

  const submitIsDisabled = formData.password?.length < 6

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setStep(1)
    setFormData(DEFAULT_FORM_DATA)
    alert(JSON.stringify(formData))
  }

  return isSubmitted ? (
    <div>
      <p>Success</p>
      <button
        className="border border-black p-2"
        onClick={() => {
          setIsSubmitted(false)
        }}
      >
        Enter again
      </button>
    </div>
  ) : (
    <form className="m-2" onSubmit={handleSubmit} onChange={handleFormChange}>
      {step}
      {step > 1 ? (
        <button
          className="block border border-black p-2"
          type="button"
          onClick={() => setStep(step - 1)}
        >
          Back
        </button>
      ) : (
        <div className="h-[42px]" />
      )}
      <div className="my-6">
        <label className={`block ${step !== 1 ? 'sr-only' : null}`}>
          <p>Name</p>
          <input type="text" name="name" className="border border-black" />
        </label>
        <label className={`block ${step !== 2 ? 'sr-only' : null}`}>
          <p>Email</p>
          <input type="email" name="email" className="border border-black" />
        </label>
        <label className={`block ${step !== 3 ? 'sr-only' : null}`}>
          <p>DOB</p>
          <input type="date" name="dob" className="border border-black" />
        </label>
        <label className={`block ${step !== 4 ? 'sr-only' : null}`}>
          <p>Password</p>
          <input
            type="password"
            name="password"
            className="border border-black"
          />
        </label>
      </div>
      {step < 4 ? (
        <button
          className="block border border-black p-2"
          onClick={() => setStep(step + 1)}
          type="button"
          disabled={nextIsDisabled}
        >
          Next
        </button>
      ) : (
        <button
          className="block border border-black p-2"
          disabled={submitIsDisabled}
        >
          Submit
        </button>
      )}
    </form>
  )
}
