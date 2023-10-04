import Accordion from './GreatFrontEnd.com/Accordion/Accordion'
import ContactForm from './GreatFrontEnd.com/ContactForm/ContactForm'

import { ACCORDION_SECTIONS } from './data'

function App() {
  return (
    <>
      <Accordion sections={ACCORDION_SECTIONS} />
      <ContactForm />
    </>
  )
}

export default App
