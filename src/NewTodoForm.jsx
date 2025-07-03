import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        {/*    value={newItem} means whatever is in this newItem just assign as a value */}
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
        {/*onChange={e => setNewItem(e.target.value)}: Whenever we type, update newItem with the latest text.  */}
      </div>

      <button className="btn">Add</button>
    </form>
  )
}
