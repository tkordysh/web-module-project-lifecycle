import React from 'react'

export default class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      taskText: ''
    }
  }

  handleChanges = e => {
    this.setState({
      taskText: e.target.value
    })
  };



  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(e, this.state.taskText)
    this.setState({
      taskText: ''
    })
  }
 
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.taskText} onChange={this.handleChanges}/>
          <button>Add Task</button>
          <button onClick={this.props.clearCompleted}>Hide Completed Tasks</button>
        </form>
      </div>
    )
  }
}
