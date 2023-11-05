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

async function submitForm(event) {
  event.preventDefault()
  const formData = new FormData(event.target)
  const { name, email, message } = Object.fromEntries(formData.entries())

  try {
    const response = await fetch(
      'https://www.greatfrontend.com/api/questions/contact-form',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      },
    )

    const text = await response.text() // Using `text` or `json` depends on what being returned
    alert(text)
  } catch (_) {
    alert('Error submitting form!')
  }
}
