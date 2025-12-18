import { useState } from "react"
import styles from "./Todolist.module.css"

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")
  
    function handleSubmit(e) {
      e.preventDefault()
      if (newItem === "") return
  
      onSubmit(newItem)
  
      setNewItem("")
    }
  
    return (
      <form onSubmit={handleSubmit} className={styles["new-item-form"]}>
        <div className={styles["form-row"]}>
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className={styles["btn"]}>Add</button>
      </form>
    )
  }

