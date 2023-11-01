import { useState } from 'react'

export default function TodoList({ todos = [] }) {
  const [newTodos, setNewTodos] = useState(todos)

  const handleAdd = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())

    if (data.title.length > 0)
      setNewTodos((prev) => {
        return [
          ...prev,
          {
            id: prev.at(-1).id + 1,
            title: data.title,
          },
        ]
      })
  }

  const handleDelete = (deletedId) => {
    const filteredTodos = newTodos.filter((item) => item.id !== deletedId)
    setNewTodos(filteredTodos)
  }

  return (
    <div className="m-2">
      <h1 className="bold mb-4 text-2xl">Todo List</h1>
      <form className="flex" onSubmit={handleAdd}>
        <input
          type="text"
          name="title"
          placeholder="Add your task"
          className="border border-black"
        />
        <button className="border border-black p-2">Submit</button>
      </form>
      <ul>
        {newTodos.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <button
              className="ml-4 border border-red-500 p-2 text-red-500"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
