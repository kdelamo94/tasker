import React, {Component} from 'react';
import TaskPaperDetailed from '../citadel/components/TaskPaperDetailed';
import TaskList from '../citadel/components/TaskList';
import HeaderBar from '../citadel/components/HeaderBar';

import Task from '../citadel/utils/Task';

import './TaskBoard.css'

let MOCK_TASKS = [
  new Task(
    "Simple Task",
    "Just a simple task." ,
    false,
    new Date()
  ),
  new Task(
    "Another Simple Task",
    "Do another simple task.",
    false,
    new Date()
  ),
  new Task(
    "Clean Litter",
    "Scoop out clumps and sweep excess litter",
    false,
    new Date(2019, 2, 13)
  ),
  new Task(
    "Fix Air Conditioner",
    "Need to call the repair man at (786) 392-5677",
    false,
    new Date(2019, 2, 19)
  )
];

class TaskBoard extends Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: MOCK_TASKS,
      todaysTasks: [],
      theWeeksTasks: [],
      remainingTasks: [],
      currentDay: new Date()
    }
  }


  componentDidMount(){
    this.timer = setInterval(
      () => this.updateDate(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  updateDate(){
    this.setState({
      currentDay: new Date()
    })
  }
  render(){

    //Retrieve list of todays tasks
    let todayTaskPapers = this.state.tasks.map((task, index) => {
      if(task.completionDate.toDateString() == (new Date().toDateString())){
        return(
          <TaskPaperDetailed
            task={task}
          />
        );
      }
    });

    //Retrieve list of the week's tasks
    let theWeekTaskPapers = this.state.tasks.map((task, index) => {
      let msDifference = Math.abs(task.completionDate - new Date());
      let dayDiff = Math.floor(msDifference / (24 * 60 * 60 * 1000));
      if(dayDiff < 7 && dayDiff > 0){
        return(
          <TaskPaperDetailed
            task={task}
          />
        );
      }
    })

    //Retrieve the list of remaining tasks
    let remainingTaskPapers = this.state.tasks.map((task, index) => {
      let msDifference = Math.abs(task.completionDate - new Date());
      let dayDiff = Math.floor(msDifference / (24 * 60 * 60 * 1000));
      if(dayDiff >= 7){
        return(
          <TaskPaperDetailed
            task={task}
          />
        );
      }
    })
    return(
      <div
        className="TaskBoard"
      >
        <HeaderBar/>
        <div
          className="TaskBoard-board"
        >
          <TaskList
            title="Today's Tasks"
            taskPapers={todayTaskPapers}
          />
          <TaskList
            title="The Week's Tasks"
            taskPapers={theWeekTaskPapers}
          />
          <TaskList
            title="All Other Tasks"
            taskPapers={remainingTaskPapers}
          />
        </div>
      </div>
    );
  }
}
export default TaskBoard;
