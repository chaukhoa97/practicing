import { useState, useEffect, useCallback, useRef, useContext } from 'react'

export default function TodoList20240122() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const trimmedInput = input.trim()
  const inputIsValid = trimmedInput.length > 0

  const handleAdd = (e) => {
    e.preventDefault()
    const timeStamp = new Date().getTime()
    const newTodoWithId = { content: trimmedInput, id: timeStamp }
    setTodos([...todos, newTodoWithId])
    setInput('')
  }

  const handleDelete = (id) => {
    if (confirm('Are you sure want to delete this?')) {
      const newTodos = todos.filter((todo) => todo.id !== id)
      setTodos(newTodos)
    }
  }

  return (
    <div className="m-2">
      <form>
        <input
          placeholder="Add your task"
          className="border p-2"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          className="border p-2"
          onClick={(e) => handleAdd(e)}
          disabled={!inputIsValid}
        >
          Submit
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button
              className="border p-1"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
