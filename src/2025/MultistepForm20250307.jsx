import s from './a.module.css'
import { useState, useEffect, useRef, useCallback } from 'react'

const STEP_DETAILS = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    name: 'birthdate',
    label: 'Birthdate',
    type: 'date',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
  },
]

export default function MultistepForm20250307() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <form
      className={s.form}
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const normalizedData = Object.fromEntries(formData.entries())
        alert(JSON.stringify(normalizedData))
      }}
    >
      {STEP_DETAILS.map((step, index) => (
        <label
          key={step.name}
          className={index !== currentStep ? 'sr-only' : ''}
        >
          {step.label}
          <input className={s.input} name={step.name} type={step.type} />
        </label>
      ))}
      <button
        className={s.btn}
        onClick={() => setCurrentStep(currentStep - 1)}
        hidden={currentStep === 0}
        type="button"
      >
        Prev
      </button>
      <button
        className={s.btn}
        onClick={() => setCurrentStep(currentStep + 1)}
        hidden={currentStep === STEP_DETAILS.length - 1}
        type="button"
      >
        Next
      </button>
      <button className={s.btn} hidden={currentStep < STEP_DETAILS.length - 1}>
        Submit
      </button>
    </form>
  )
}
