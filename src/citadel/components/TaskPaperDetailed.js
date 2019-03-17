import React, {Component} from 'react';
import './TaskPaperDetailed.css'

class TaskPaperDetailed extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let task = this.props.task;
    return(
      <div
        className="TaskPaperDetailed"

      >
        <div
          className="TaskPaperDetailed-margin"
        >
          <div
            className="TaskPaperDetailed-hole"
          >
          </div>
        </div>
        <div
          className="TaskPaperDetailed-content"
        >
          <input
            id="title"
            className="TaskPaperDetailed-title"
            value={task.title}
            onChange={(e) => this.props.handleChange(e, this.props.id)}
          />
          <div
            className="TaskPaperDetailed-body"
          >
          {task.description}
          </div>
        </div>
      </div>
    );
  }
}
export default TaskPaperDetailed;
