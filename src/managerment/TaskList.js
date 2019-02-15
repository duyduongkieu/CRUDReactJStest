import React, { Component } from 'react';
import TaskItem from './TaskItem';
class TaskList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { tasks } = this.props;
    var elementTask = tasks.map((task, index) => {
      return <TaskItem 
                key={task.id} 
                task={task} 
                index={index} 
                onUpdateStatus = {this.props.onUpdateStatus} 
                onDelete = {this.props.onDelete}   
                onUpdate = {this.props.onUpdate}
                />;
    });
    return (
      <div className="form-group">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên Phim</th>
              <th scope="col">Trạng thái</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>{elementTask}</tbody>
        </table>
      </div>
    );
  }
}

export default TaskList;
