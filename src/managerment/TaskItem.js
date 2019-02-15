import React, { Component } from 'react';
import '../App.css';
class TaskItem extends Component {
  constructor(props) {
    super(props);
  }
  onUpdateStatus = () => {
    //   console.log(this.props.task.id)
    this.props.onUpdateStatus(this.props.task.id);
  };
  onDelete = () => {
    //   console.log(this.props.task.id)
    this.props.onDelete(this.props.task.id);
  };
  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  };
  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{task.name}</td>
        <td>
          <span
            className={task.status === true ? 'border-green' : 'border-red'}
            onClick={this.onUpdateStatus}
          >
            {task.status === true ? 'Kích hoạt' : 'Ẩn'}
          </span>
        </td>
        <td>
          <button
            className="btn btn-secondary"
            type="button"
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={this.onUpdate}
          >
            <i className="fas fa-edit" />
          </button>
          <button className="btn btn-danger" onClick={this.onDelete}>
            <i className="fas fa-trash" />
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
