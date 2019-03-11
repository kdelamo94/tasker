import React, {Component} from 'react';

class TaskList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let taskPapers = this.props.taskPapers;
    let title = this.props.title;
    return(
      <div
        className="TaskList"
      >
        <div
          className="TaskList-header"
        >
          {title}
        </div>
        <div
          className="TaskList-body"
        >
          {taskPapers}
        </div>
      </div>
    )
  }
}
export default TaskList;
