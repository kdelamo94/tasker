import React, {Component} from 'react';

class TaskPaperDetailed extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let task = this.props.task;
    return(
      <div
        className="TaskPaperDetailed-paper"
      >
        <div
          className="TaskPaperDetailed-title"
        >
          {task.title}
        </div>
        <div
          className="TaskPaperDetailed-body"
        >
        {task.description}
        </div>
      </div>
    );
  }
}
export default TaskPaperDetailed;
