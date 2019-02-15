import React, { Component } from 'react';
import TaskForm from './managerment/TaskForm';
import TaskSort from './managerment/TaskSort';
import TaskList from './managerment/TaskList';
import TaskSearch from './managerment/TaskSearch';
import { v4 as uuid } from 'uuid';
import 'antd/dist/antd.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskEditing: null
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  componentDidMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      });
    }
  }

  //   ...sujbmit form add
  onSubmitForm(data) {
    var { tasks } = this.state;
    data.id = uuid();
    tasks.push(data);

    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  //   ....update status
  onUpdateStatus = id => {
    var index = this.fillIndex(id);
    var { tasks } = this.state;
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  };
  fillIndex = id => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };
  // ...............onDelete
  onDelete = id => {
    var index = this.fillIndex(id);
    var { tasks } = this.state;
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  };
  //   .............onUpdate
  onUpdate = id => {
    // console.log(id);
    var { tasks } = this.state;
    var index = this.fillIndex(id);
    var taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing
    });
    console.log(index, this.state.taskEditing);
  };
  // ........................................Manangement...........................
  render() {
    return (
      <div className="container">
        <h1>Quản lí Phim Ahuhu</h1>
        <div className="row">
          <div className="col-md-2">
            <TaskForm
              onSubmitForm={this.onSubmitForm}
              taskEditing={this.state.taskEditing}
            />
          </div>
          <div className="col-md-6">
            <TaskSearch />
          </div>
          <div className="col-md-4">
            <TaskSort />
          </div>
        </div>
        <div className="List-flim">
          <TaskList
            tasks={this.state.tasks}
            onUpdateStatus={this.onUpdateStatus}
            onDelete={this.onDelete}
            onUpdate={this.onUpdate}
          />
        </div>
      </div>
    );
  }
}

export default App;
