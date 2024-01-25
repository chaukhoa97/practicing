import { useState } from 'react'

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  dob: '',
  password: '',
}

const STEPS = [
  { name: 'name', label: 'Name', previous: null, next: 'email' },
  {
    name: 'email',
    label: 'Email',
    previous: 'name',
    next: 'dob',
    type: 'email',
  },
  {
    name: 'dob',
    label: 'Date of Birth',
    previous: 'email',
    next: 'password',
    type: 'date',
  },
  {
    name: 'password',
    label: 'Password',
    previous: 'dob',
    next: null,
    type: 'password',
  },
]

export default function MultistepForm20240124() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)
  const [step, setStep] = useState(STEPS[0].name)

  return (
    <form className="m-2">
      {STEPS.map((item) => {
        const handleBack = (e) => {
          e.preventDefault()
          setStep(item.previous)
        }

        const handleNext = (e) => {
          let isValid
          switch (item.name) {
            case 'name':
              isValid = formData[item.name].length > 0
              break
            case 'email':
              isValid = formData[item.name].includes('@')
              break
            case 'dob':
              isValid = formData[item.name].length > 0
              break
          }

          if (isValid) {
            e.preventDefault()
            setStep(item.next)
          }
        }

        const handleSubmit = (e) => {
          let isValid = formData[item.name].length > 0

          if (isValid) {
            e.preventDefault()
            alert(JSON.stringify(formData))
            setFormData(INITIAL_FORM_DATA)
            setStep(STEPS[0].name)
          }
        }

        return (
          <div key={item.name} hidden={item.name !== step}>
            {item.previous ? (
              <button className="border p-2" onClick={handleBack}>
                Back
              </button>
            ) : (
              <div className="h-[42px]" aria-hidden={true} />
            )}
            <label className="block">
              <p>{item.label}</p>
              <input
                className="border p-2"
                value={formData[item.name]}
                name={item.name}
                {...(item.type && { type: item.type })}
                onChange={(e) =>
                  setFormData({ ...formData, [item.name]: e.target.value })
                }
                required
              />
            </label>
            {item.next ? (
              <button className="border p-2" onClick={handleNext}>
                Next
              </button>
            ) : (
              <button className="border p-2" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        )
      })}
    </form>
  )
}
