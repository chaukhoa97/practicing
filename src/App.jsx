import Accordion from './GreatFrontEnd.com/Accordion/Accordion'
import Tabs from './GreatFrontEnd.com/Tabs/Tabs'
import JobBoard from './GreatFrontEnd.com/Job Board/JobBoard'
import TodoList from './GreatFrontEnd.com/TodoList/TodoList'

import GridLights from './GreatFrontEnd.com/GridLights/GridLights'
import StarRating from './GreatFrontEnd.com/StarRating/StarRating'
import TrafficLight from './GreatFrontEnd.com/Traffic Light/TrafficLight'
import TicTacToe from './GreatFrontEnd.com/Tic-tac-toe/TicTacToe'
import Stopwatch from './GreatFrontEnd.com/Stopwatch/Stopwatch'
import CryptoConverter from './FrontEndEval.com/CryptoConverter/CryptoConverter'
import LocalStorage from './Codedamn.com/LocalStorage/LocalStorage'
import UndoableCounter from './GreatFrontEnd.com/Undoable Counter/UndoableCounter'

import TransferList from './GreatFrontEnd.com/Transfer List/TransferList'
import TwoFactorCodeInput from './FrontEndEval.com/TwoFactorCodeInput/TwoFactorCodeInput'

import ContactForm from './GreatFrontEnd.com/ContactForm/ContactForm'
import FlightBooker from './GreatFrontEnd.com/FlightBooker/FlightBooker'
import TemperatureConverter from './GreatFrontEnd.com/TemperatureConverter/TemperatureConverter'
import MortgageCalculator from './GreatFrontEnd.com/MortgageCalculator/MortgageCalculator'
import SignUpForm from './GreatFrontEnd.com/Sign Up Form/SignUpForm'
import MultistepForm from './FrontEndEval.com/MultistepForm/MultistepForm'

import ModalExample from './FrontEndEval.com/Modal/Modal'
import ProgressBar from './GreatFrontEnd.com/ProgressBar/ProgressBar'
import ProgressBars from './GreatFrontEnd.com/ProgressBars/ProgressBars'
import GenerateTable from './GreatFrontEnd.com/GenerateTable/GenerateTable'
import HolyGrail from './GreatFrontEnd.com/HolyGrail/HolyGrail'
import Tweet from './GreatFrontEnd.com/Tweet/Tweet'
import AnalogClock from './GreatFrontEnd.com/AnalogClock/AnalogClock'
import DigitalClock from './GreatFrontEnd.com/DigitalClock/DigitalClock'
import LikeButton from './GreatFrontEnd.com/LikeButton/LikeButton'
import { SECTIONS, TODOS, TRANSFER_LIST_DATA } from './data'
import TodoList20231214 from './Reattempt/TodoList20231214'
import ContactForm20231219 from './Reattempt/ContactForm20231219'
import Accordion20231221 from './Reattempt/Accordion20231221'
import Tabs20240106 from './Reattempt/Tabs20240106'
import JobBoard20240107 from './Reattempt/JobBoard20240107'
import FlightBooker20240109 from './Reattempt/FlightBooker20240109'
import LocalStorage20240115 from './Reattempt/LocalStorage20240115'
import Modal202401016 from './Reattempt/Modal202401016'
import TemperatureConverter20240117 from './Reattempt/TemperatureConverter20240117'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import TodoList20240122 from './Reattempt/TodoList20240122'
import Test from './Test'
import MultistepForm20240124 from './Reattempt/MultistepForm20240124'

function App() {
  return (
    <>
      {/* <Test /> */}
      {/* MAJOR */}

      {/* BASIC */}
      {/* <Accordion sections={SECTIONS} /> */}
      {/* <Tabs sections={SECTIONS} /> */}
      {/* <TodoList todos={TODOS} /> */}
      {/* <LocalStorage /> */}
      {/* <ModalExample /> */}

      {/* FETCHING */}
      {/* <JobBoard /> */}

      {/* FORM  */}
      {/* <ContactForm /> */}
      {/* <TemperatureConverter /> */}
      {/* <MultistepForm /> */}

      {/* DATE TIME */}
      {/* <FlightBooker /> */}
      {/* <Stopwatch /> */}

      {/* REATTEMPT */}
      {/* <TodoList20231214 /> */}
      {/* <TodoList20240122 /> */}
      {/* <ContactForm20231219 /> */}
      {/* <Accordion20231221 sections={SECTIONS} /> */}
      {/* <Tabs20240106 sections={SECTIONS} /> */}
      {/* <JobBoard20240107 /> */}
      {/* <FlightBooker20240109 /> */}
      {/* <LocalStorage20240115 /> */}
      {/* <Modal202401016 /> */}
      {/* <TemperatureConverter20240117 /> */}
      <MultistepForm20240124 />

      {/* MINOR */}

      {/* BASIC */}
      {/* <GridLights /> */}
      {/* <StarRating count={5} rating={4} /> */}
      {/* <TrafficLight /> */}
      {/* <TicTacToe /> */}
      {/* <UndoableCounter /> */}
      {/* <TwoFactorCodeInput /> */}
      {/* BASIC-HARD */}
      {/* <ProgressBars /> */}
      {/* <TransferList data={TRANSFER_LIST_DATA} /> */}

      {/* FORM */}
      {/* <SignUpForm /> */}
      {/* <MortgageCalculator /> */}

      {/* FETCHING */}
      {/* <CryptoConverter /> */}

      {/* STYLING */}
      {/* <ProgressBar percentage={222} /> */}
      {/* <GenerateTable /> */}
      {/* <HolyGrail /> */}
      {/* <Tweet
        name="John Doe"
        metadata={{ account: 'johndoe', date: new Date() }}
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nemo ducimus mollitia error sint cumque reprehenderit eum recusandae dolorem debitis magnam saepe magni eos tempore sequi, voluptatem quis autem doloremque? Consequatur, porro possimus iusto ratione delectus mollitia laboriosam hic dolore amet repellendus recusandae impedit libero modi animi, perferendis dicta. At."
        actionCount={{
          messageCount: 1094,
          retweetCount: 5,
          reactionCount: 8402,
        }}
      /> */}
      {/* <AnalogClock /> */}
      {/* <DigitalClock /> */}
      {/* <LikeButton /> */}
    </>
  )
}

export default App
