import { useState } from 'react'
import { cn } from '../util'

const TASK_LIST = [
  {
    id: 1,
    value: 'Task 1',
  },
  {
    id: 2,
    value: 'Task 2',
  },
]

export default function TodoList() {
  const [tasks, setTasks] = useState(TASK_LIST)
  const [newTaskInput, setNewTaskInput] = useState('')

  const addNewTask = (value) => {
    setNewTaskInput('')

    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID() + value,
        value,
      },
    ])
  }

  const removeTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addNewTask(newTaskInput)
        }}
      >
        <input
          className="border border-black"
          type="text"
          value={newTaskInput}
          onChange={(e) => setNewTaskInput(e.target.value)}
        />
        <button disabled={newTaskInput.length === 0}>Submit</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center gap-2">
            <span>{task.value}</span>
            <button className="border p-2" onClick={() => removeTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
