import { useState } from 'react'

export default function TodoList20231214() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const trimmedInput = input.trim()

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, trimmedInput])
    setInput('')
  }

  const handleDelete = (todo) => {
    const deletedTodoIndex = todos.findIndex((t) => t === todo)

    const newTodos = [...todos]
    newTodos.splice(deletedTodoIndex, 1)
    setTodos(newTodos)
  }

  return (
    <div className="m-2">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add your task"
          className="border border-black p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button disabled={trimmedInput.length === 0}>Submit</button>
      </form>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <span>{todo}</span>
            <button
              className="border border-black p-2"
              onClick={() => handleDelete(todo)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
