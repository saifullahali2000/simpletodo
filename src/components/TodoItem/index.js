// Write your code here

import './index.css'

const ListItem = props => {
  const {listDetails, deleteItem} = props
  const {title, id} = listDetails
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="list">
      <p className="para">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default ListItem
