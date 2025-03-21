import { SECTIONS, TODOS, TRANSFER_LIST_DATA } from './data'
import Accordion from './Accordion/Accordion'
import Tabs from './Tabs/Tabs'
import TodoList from './TodoList/TodoList'
import TransferList from './TransferList/TransferList'
import Tweet from './Tweet/Tweet'

import LocalStorage from './2025/LocalStorage20250304'
import TodoList20250303 from './2025/TodoList20250303'
import Tabs20250304 from './2025/Tabs20250304'
import TemperatureConverter20250305 from './2025/TemperatureConverter20250305'
import StarRating20250306 from './2025/StarRating20250306'
import LikeButton from './LikeButton/LikeButton'
import MultistepForm20250307 from './2025/MultistepForm20250307'
import FlightBooker20250308 from './2025/FlightBooker20250308'
import Stopwatch20250309 from './2025/Stopwatch20250309'
import HolyGrail20250310 from './2025/HolyGrail20250310'
import TrafficLight20250311 from './2025/TrafficLight20250311'
import ProgressBar2 from './2025/ProgressBar2'
import Tweet2 from './2025/Tweet2'
import AuthCodeInput from './AuthCodeInput/AuthCodeInput'
import ModalApp from './2025/Modal2'
import DataTable from './DataTable/DataTable'
import TicTacToe2 from './2025/TicTacToe2'
import LikeButton2 from './2025/LikeButton2'
import UndoableCounter2 from './2025/UndoableCounter2'
import TransferList2 from './2025/TransferList2'

function App() {
  return (
    <>
      <TransferList2 />
      {/* REFERENCES */}
      {/* <Accordion sections={SECTIONS} />
      <Tabs sections={SECTIONS} />
      <TodoList todos={TODOS} />
      <TransferList data={TRANSFER_LIST_DATA} />
      <Tweet
        name="John Doe"
        metadata={{ account: 'johndoe', date: new Date() }}
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nemo ducimus mollitia error sint cumque reprehenderit eum recusandae dolorem debitis magnam saepe magni eos tempore sequi, voluptatem quis autem doloremque? Consequatur, porro possimus iusto ratione delectus mollitia laboriosam hic dolore amet repellendus recusandae impedit libero modi animi, perferendis dicta. At."
        actionCount={{
          messageCount: 1094,
          retweetCount: 5,
          reactionCount: 8402,
        }}
      /> */}
    </>
  )
}

export default App
