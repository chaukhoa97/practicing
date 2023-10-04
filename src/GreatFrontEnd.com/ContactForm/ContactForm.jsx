// https://www.greatfrontend.com/questions/user-interface/contact-form

export default function ContactForm() {
  return (
    <form
      onSubmit={submitForm}
      method="post"
      action="https://www.greatfrontend.com/api/questions/contact-form"
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="block border border-black"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        className="block border border-black"
      />
      <label htmlFor="name">Message</label>
      <textarea
        id="message"
        name="message"
        className="block border border-black"
      />
      <button>Send</button>
    </form>
  )
}

// Being provided in advanced to validate the form
const SUBMIT_URL = 'https://www.greatfrontend.com/api/questions/contact-form'

async function submitForm(event) {
  event.preventDefault()
  const form = event.target

  try {
    if (form.action !== SUBMIT_URL) {
      alert('Incorrect form action value')
      return
    }

    if (form.method.toLowerCase() !== 'post') {
      alert('Incorrect form method value')
      return
    }

    const formData = new FormData(form)
    const response = await fetch(SUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
    })

    const text = await response.text()
    alert(text)
  } catch (_) {
    alert('Error submitting form!')
  }
}
