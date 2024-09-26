import {Component} from 'react'
import ListItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {listItem: initialTodosList}

  deleteItem = id => {
    const {listItem} = this.state
    const filteredUsersData = listItem.filter(each => each.id !== id)
    this.setState({
      listItem: filteredUsersData,
    })
  }

  render() {
    const {listItem} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>Simple Todos</h1>
          <ul className="list-cont">
            {listItem.map(eachItem => (
              <ListItem
                listDetails={eachItem}
                key={eachItem.id}
                deleteItem={this.deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
