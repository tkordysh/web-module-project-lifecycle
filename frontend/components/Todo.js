import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div onClick={ () => this.props.toggleTask(this.props.task.id)} className={`todo${this.props.task.completed ? ' completed' : ''}`}>
        <p>{this.props.task.name}</p>
      </div>
    )
  }
}