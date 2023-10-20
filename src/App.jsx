import Accordion from './GreatFrontEnd.com/Accordion/Accordion'
import ContactForm from './GreatFrontEnd.com/ContactForm/ContactForm'
import FlightBooker from './GreatFrontEnd.com/FlightBooker/FlightBooker'
import GenerateTable from './GreatFrontEnd.com/GenerateTable/GenerateTable'
import HolyGrail from './GreatFrontEnd.com/HolyGrail/HolyGrail'
import ProgressBar from './GreatFrontEnd.com/ProgressBar/ProgressBar'
import ProgressBars from './GreatFrontEnd.com/ProgressBars/ProgressBars'
ProgressBars
import TemperatureConverter from './GreatFrontEnd.com/TemperatureConverter/TemperatureConverter'

import { ACCORDION_SECTIONS } from './data'

function App() {
  return (
    <>
      {/* <Accordion sections={ACCORDION_SECTIONS} />
      <ContactForm />
      <FlightBooker />
      <GenerateTable />
      <HolyGrail />
      <ProgressBar percentage={222} />
      <ProgressBars /> */}
      <TemperatureConverter />
    </>
  )
}

export default App
