// https://www.greatfrontend.com/questions/user-interface/generate-table
import { useState } from 'react'

export default function GenerateTable() {
  const [tableValues, setTableValues] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    // Since the table should only be created when the "Submit" button is pressed, an uncontrolled form works better here.
    const formData = new FormData(e.target)
    const { rows, columns } = Object.fromEntries(formData.entries())

    let tableRows = []
    for (let rowNumber = 1; rowNumber <= rows; rowNumber++) {
      let newRow = [rowNumber]
      for (let colNumber = 2; colNumber <= columns; colNumber++) {
        newRow.push(2 * rows * (colNumber - 1) + 1 - newRow.at(-1))
      }
      tableRows.push(newRow)
    }

    setTableValues(tableRows)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="rows">Rows</label>
      <input
        name="rows"
        id="rows"
        className="border border-black"
        type="number"
        min={1}
        required
      />
      <label htmlFor="columns">Columns</label>
      <input
        name="columns"
        id="columns"
        className="border border-black"
        type="number"
        min={1}
        required
      />
      <button>Submit</button>
      {tableValues.length > 0 && (
        <table>
          <tbody>
            {tableValues.map((row, i) => (
              <tr key={i}>
                {row.map((r) => (
                  <td className="border border-black" key={r}>
                    {r}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </form>
  )
}
