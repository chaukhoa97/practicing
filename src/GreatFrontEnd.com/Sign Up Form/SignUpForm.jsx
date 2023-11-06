import { useState } from 'react'

async function submitForm(username, email, password, passwordConfirm) {
  try {
    const response = await fetch(
      'https://www.greatfrontend.com/api/questions/sign-up',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          password_confirm: passwordConfirm,
        }),
      },
    )

    const { message } = await response.json()
    alert(message)
  } catch (_) {
    alert('Error submitting form!')
  }
}

export default function SignUpForm() {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const [hasTriedToSubmit, setHasTriedToSubmit] = useState(false)

  const { username, email, password, passwordConfirm } = formValues

  const usernameIsValid = username.length >= 4 && username.match(/^[0-9a-z]+$/)
  const emailIsValid = /\S+@\S+\.\S+/.test(email)
  const passwordIsValid = password.length >= 6
  const passwordConfirmIsValid = passwordConfirm === password

  const handleSubmit = (e) => {
    e.preventDefault()
    submitForm(username, email, password, passwordConfirm)
    if (!hasTriedToSubmit) setHasTriedToSubmit(true)
  }

  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  return (
    <form
      onSubmit={handleSubmit}
      onChange={handleFormChange}
      value={formValues}
    >
      <div className="mb-4">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          className="ml-2 border border-black"
        />
        {!usernameIsValid && hasTriedToSubmit && (
          <p className="text-red-500">
            Username must be at least 4 characters and alphanumeric only
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="username">Email</label>
        <input id="email" name="email" className="ml-2 border border-black" />
        {!emailIsValid && hasTriedToSubmit && (
          <p className="text-red-500">Email must be valid</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          className="ml-2 border border-black"
        />
        {!passwordIsValid && hasTriedToSubmit && (
          <p className="text-red-500">Password must be at least 6 characters</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="confirm-password">Confirm password</label>
        <input
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          className="ml-2 border border-black"
        />
        {!passwordConfirmIsValid && hasTriedToSubmit && (
          <p className="text-red-500">Confirm Password doesn't match</p>
        )}
      </div>
      <button className="border border-black p-2">Sign Up</button>
    </form>
  )
}
