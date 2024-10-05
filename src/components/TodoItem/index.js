import {useState} from 'react'

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, saveTodo} = props
  const {id, title} = todoDetails

  const [isSaved, setIsSaved] = useState(true)
  const [newTitle, setNewTitle] = useState(title)
  const [striked, setStrike] = useState('title')

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onSaveTodo = () => {
    setIsSaved(true)
    saveTodo({id, title: newTitle})
  }

  const onEditClick = () => setIsSaved(false)

  const onChangeHandler = event => setNewTitle(event.target.value)

  const strikeline = event => {
    if (event.target.checked) {
      setStrike('title-is-checked')
    } else {
      setStrike('title')
    }
  }

  return (
    <li className="todo-item">
      {isSaved ? (
        <div className="input-element">
          <input type="checkbox" id={`text${id}`} onChange={strikeline} />
          <label className={striked} htmlFor={`text${id}`}>
            {title}
          </label>
        </div>
      ) : (
        <input
          type="text"
          className="editedInput"
          value={newTitle}
          onChange={onChangeHandler}
        />
      )}
      {isSaved ? (
        <button
          type="button"
          className="delete-btn edit-btn"
          onClick={onEditClick}
        >
          Edit
        </button>
      ) : (
        <button
          type="button"
          className="delete-btn save-btn"
          onClick={onSaveTodo}
        >
          Save
        </button>
      )}
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
