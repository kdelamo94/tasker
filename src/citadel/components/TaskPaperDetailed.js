import React, {Component} from 'react';
import './TaskPaperDetailed.css'

let monthSelections = []
let yearSelections = []
let dateSelections = []
let generateOption = (i, offset) => {
  return (
    <option value={i}>{i + offset}</option>
  )
};

for(let i = 1; i < 31; i++){
  dateSelections.push(
    generateOption(i, 0)
  );
}

for(let i = 0; i < 12; i++){
  monthSelections.push(
    generateOption(i, 1)
  );
}

for(let i = 0; i < 999; i++){
  yearSelections.push(
    generateOption(i + 2000, 0)
  );
}


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

          <select
            id="m"
            value={task.completionDate ? task.completionDate.getMonth() : ""}
            onChange={(e) => this.props.handleDateChange(e, this.props.id)}
          >
            {monthSelections}
          </select>
          /
          <select
            id="d"
            value={task.completionDate ? task.completionDate.getDate() : ""}
            onChange={(e) => this.props.handleDateChange(e, this.props.id)}
          >
            {dateSelections}
          </select>
          /
          <select
            id="y"
            value={task.completionDate ? task.completionDate.getFullYear() : ""}
            onChange={(e) => this.props.handleDateChange(e, this.props.id)}
          >
            {yearSelections}
          </select>
          <div
            id="description"
            className="TaskPaperDetailed-body"
            contentEditable={true}
            onChange={(e) => this.props.handleChange(e, this.props.id)}
          >
            {task.description}
          </div>
        </div>
      </div>
    );
  }
}
export default TaskPaperDetailed;
