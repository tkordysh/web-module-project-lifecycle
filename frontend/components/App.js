import React from 'react'
import TodoList from './TodoList';
import Todo from './Todo';
import Form from './Form';
import axios from 'axios';

const URL = 'http://localhost:9000/api/todos'


const fetchData = () => {
  return axios.get(`http://localhost:9000/api/todos`)
    .then(res => {
      console.log(res.data.data);
      return res;
    })
    .catch(err => {
      console.error(err);
    })
}



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  toggleTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }


  addTask = (e, task) => {
    const newTask = {
      name: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }


  clearCompleted = (e) => {
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    })
  }



  componentDidMount() {
    fetchData()
        .then(res => {
            this.setState({
                tasks: res.data.data
            })
        })
}

  render() {
    return (
      <div>
        <h2>Todo List: </h2>
        <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask}/>
        <Form tasks={this.state.tasks} clearCompleted={this.clearCompleted} addTask={this.addTask}/>
      </div>
    )
  }
}
