import Accordion from './GreatFrontEnd.com/Accordion/Accordion'
import ContactForm from './GreatFrontEnd.com/ContactForm/ContactForm'
import FlightBooker from './GreatFrontEnd.com/FlightBooker/FlightBooker'
import GenerateTable from './GreatFrontEnd.com/GenerateTable/GenerateTable'
import HolyGrail from './GreatFrontEnd.com/HolyGrail/HolyGrail'
import ProgressBar from './GreatFrontEnd.com/ProgressBar/ProgressBar'
import ProgressBars from './GreatFrontEnd.com/ProgressBars/ProgressBars'
import TemperatureConverter from './GreatFrontEnd.com/TemperatureConverter/TemperatureConverter'
import MortgageCalculator from './GreatFrontEnd.com/MortgageCalculator/MortgageCalculator'
import Tweet from './GreatFrontEnd.com/Tweet/Tweet'
import Tabs from './GreatFrontEnd.com/Tabs/Tabs'
import AnalogClock from './GreatFrontEnd.com/AnalogClock/AnalogClock'

import { SECTIONS, TODOS, TRANSFER_LIST_DATA } from './data'
import GridLights from './GreatFrontEnd.com/GridLights/GridLights'
import LikeButton from './GreatFrontEnd.com/LikeButton/LikeButton'
import StarRating from './GreatFrontEnd.com/StarRating/StarRating'
import TodoList from './GreatFrontEnd.com/Todo List/TodoList'
import TrafficLight from './GreatFrontEnd.com/Traffic Light/TrafficLight'
import DigitalClock from './GreatFrontEnd.com/DigitalClock/DigitalClock'
import TicTacToe from './GreatFrontEnd.com/Tic-tac-toe/TicTacToe'
import JobBoard from './GreatFrontEnd.com/Job Board/JobBoard'
import SignUpForm from './GreatFrontEnd.com/Sign Up Form/SignUpForm'
import Stopwatch from './GreatFrontEnd.com/Stopwatch/Stopwatch'
import TransferList from './GreatFrontEnd.com/Transfer List/TransferList'
import UndoableCounter from './GreatFrontEnd.com/Undoable Counter/UndoableCounter'
import ModalExample from './FrontEndEval.com/Modal/Modal'

function App() {
  return (
    <>
      {/* <Accordion sections={SECTIONS} />
      <Tabs sections={SECTIONS} /> */}
      {/* <JobBoard /> */}
      {/* <ProgressBars />
      <ContactForm />
      <FlightBooker />
      <GenerateTable />
      <HolyGrail />
      <ProgressBar percentage={222} />
      <TemperatureConverter />
      <MortgageCalculator />
      <Tweet
        name="John Doe"
        metadata={{ account: 'johndoe', date: new Date() }}
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nemo ducimus mollitia error sint cumque reprehenderit eum recusandae dolorem debitis magnam saepe magni eos tempore sequi, voluptatem quis autem doloremque? Consequatur, porro possimus iusto ratione delectus mollitia laboriosam hic dolore amet repellendus recusandae impedit libero modi animi, perferendis dicta. At."
        actionCount={{
          messageCount: 1094,
          retweetCount: 5,
          reactionCount: 8402,
        }}
      />
      <GridLights />
      <LikeButton />
      <StarRating count={5} rating={4} />
      <TodoList todos={TODOS} /> */}
      {/* <TrafficLight /> */}
      {/* <AnalogClock />
      <DigitalClock /> */}
      {/* <TicTacToe /> */}
      {/* <SignUpForm />
      <Stopwatch />
      <TransferList data={TRANSFER_LIST_DATA} />
      <UndoableCounter /> */}
      <ModalExample />
    </>
  )
}

export default App
