import React, {Component} from 'react';
import TaskPaperDetailed from '../citadel/components/TaskPaperDetailed';
import TaskList from '../citadel/components/TaskList';
import HeaderBar from '../citadel/components/HeaderBar';
import CreateButton from '../citadel/components/CreateButton'
import Task from '../citadel/utils/Task';

import './TaskBoard.css'

let MOCK_TASKS = [
  new Task(
    "Simple Task",
    "Just a simple task." ,
    false,
    new Date(Date.now())
  ),
  new Task(
    "Another Simple Task",
    "Do another simple task.",
    false,
    new Date(Date.now())
  ),
  new Task(
    "Clean Litter",
    "Scoop out clumps and sweep excess litter",
    false,
    new Date(Date.UTC(2019, 2, 13))
  ),
  new Task(
    "Fix Air Conditioner",
    "Need to call the repair man at (786) 392-5677",
    false,
    new Date(Date.UTC(2019, 2, 19))
  )
];

class TaskBoard extends Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: MOCK_TASKS,
      currentDay: new Date(Date.now())
    }

    //Function Bindings to This
    this.handleCreateButtonClick = this.handleCreateButtonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //Event Handlers
  handleCreateButtonClick(){
    let task = new Task(
      "Title",
      "Description",
      false,
      new Date(Date.now())
    )

    let tasks = this.state.tasks;
    tasks.unshift(task);
    this.setState({
      tasks: tasks
    })
  }

  handleChange(e, key){
    let tasks = this.state.tasks
    tasks[key][e.target.id] = e.target.value
    this.setState({
      tasks: tasks
    })
  }

  //Utility Methods
  updateDate(){
    this.setState({
      currentDay: new Date(Date.now())
    })
  }

  //Life Cycle Methods
  componentDidMount(){
    this.timer = setInterval(
      () => this.updateDate(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }



  render(){
    console.log(this.state.tasks)
    //Retrieve list of todays tasks
    let todayTaskPapers = this.state.tasks.map((task, index) => {
      let dayDiff = Math.abs(
        task.completionDate.getUTCDate() -
        (
          new Date(
            Date.now()
          ).getUTCDate()
        )
      );

      if(dayDiff == 0){
        return(
          <TaskPaperDetailed
            id={index}
            key={index}
            task={task}
            handleChange={this.handleChange}
          />
        );
      }
    });

    console.log();
    //Retrieve list of the week's tasks
    let theWeekTaskPapers = this.state.tasks.map((task, index) => {
      let dayDiff = Math.abs(
        task.completionDate.getUTCDate() -
        (
          new Date(
            Date.now()
          ).getUTCDate()
        )
      );


      if(dayDiff < 7 && dayDiff > 0){
        return(
          <TaskPaperDetailed
            id={index}
            key={index}
            task={task}
            handleChange={this.handleChange}
          />
        );
      }
    })

    //Retrieve the list of remaining tasks
    let remainingTaskPapers = this.state.tasks.map((task, index) => {
      let dayDiff = Math.abs(task.completionDate.getUTCDate() - (new Date(Date.now()).getUTCDate()));

      if(dayDiff >= 7){
        return(
          <TaskPaperDetailed
            id={index}
            key={index}
            task={task}
            handleChange={this.handleChange}
          />
        );
      }
    })
    return(
      <div
        className="TaskBoard"
      >
        <HeaderBar  />

        <div
          className="TaskBoard-tasklistcontainer"
        >
        <div
          className="TaskBoard-buttonholder"
        >
          <CreateButton
            content="Create New Task"
            handleClick={this.handleCreateButtonClick}
          />
        </div>
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
      </div>
    );
  }
}
export default TaskBoard;
