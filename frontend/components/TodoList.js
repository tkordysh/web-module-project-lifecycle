import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {

  render() {
    return (
      <div>
        {this.props.tasks.map(task => {
          return <Todo key={task.id} task={task} toggleTask={this.props.toggleTask}/>
        })}
      </div>
    )
  }
}
