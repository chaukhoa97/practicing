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
  return <>SignUpForm</>
}
