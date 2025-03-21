![Alt text](image.png)

1. Add new tasks on clicking the "Submit" button. The `<input>` field should be cleared upon successful addition.
2. Remove tasks from the Todo List upon clicking the "Delete" button.
3. Note: You may want to think about ways to improve the user experience of the application and implement them (you get bonus credit for doing that during interviews).
4. (Mid Follow up) Add Edit button beside Delete button that allow editing the task (changing the task to input...)

## Starter Code

```jsx
import { cn } from '../util'

export default function TodoList() {
  return (
    <div>
      <input type="text" />
      <button>Submit</button>
      <ul>
        <li>
          <span>Task 1</span>
          <button>Delete</button>
        </li>
        <li>
          <span>Task 2</span>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  )
}
```
