import { useRef } from 'react'

const ENDPOINT = 'https://www.greatfrontend.com/api/questions/contact-form'

export default function ContactForm20231219() {
  const formRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const resText = await res.text()
    window.alert(resText)
    formRef.current.reset()
  }

  return (
    <form className="m-2" onSubmit={handleSubmit} ref={formRef}>
      <label>
        Name
        <input name="name" required className="ml-2 border border-black p-2" />
      </label>
      <label>
        Email
        <input
          name="email"
          required
          type="email"
          className="ml-2 border border-black p-2"
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          required
          className="ml-2 border border-black p-2"
        />
      </label>
      <button>Send</button>
    </form>
  )
}
