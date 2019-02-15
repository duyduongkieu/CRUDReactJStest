import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: false
    };
  }
componentWillMount() {
    console.log('222')
}
  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    if (name === 'status') {
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name]: value
    });
  };
  onHandelSubmit = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state);
    this.onClear();
  };
  onClear = () => {
    this.setState({
      name: '',
      status: false
    });
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Thêm mới
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                {this.props.taskEditing  ? 'Cập nhật thông tin' : 'Thêm mới'}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.onHandelSubmit}>
                  <div className="form-group">
                    <label>Tên phim</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={this.onChange}
                      name="name"
                      value={this.state.name}
                      placeholder="Nhập tên phim"
                    />
                  </div>
                  <div className="form-group">
                    <label>Trạng thái</label>
                    <select
                      className="form-control"
                      onChange={this.onChange}
                      name="status"
                    >
                      <option value={false}>Ẩn</option>
                      <option value={true}>Hiện</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Lưu lại
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskForm;
