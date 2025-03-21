const POST_DESTINATION =
  'https://www.greatfrontend.com/api/questions/contact-form'

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const formDataEntries = Object.fromEntries(formData.entries())

    fetch(POST_DESTINATION, {
      method: 'POST',
      body: JSON.stringify(formDataEntries),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name <input name="name" className="border border-black p-2" />
      </label>
      <label>
        Email <input name="email" className="border border-black p-2" />
      </label>
      <label>
        Message <textarea name="message" className="border border-black p-2" />
      </label>
      <button className="border border-black p-2">Send</button>
    </form>
  )
}
