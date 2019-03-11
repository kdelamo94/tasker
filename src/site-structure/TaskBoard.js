import React, {Component} from 'react';
import TaskPaperDetailed from '../citadel/components/TaskPaperDetailed';
import TaskList from '../citadel/components/TaskList';
import HeaderBar from '../citadel/components/HeaderBar';
import './TaskBoard.css'

class TaskBoard extends Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: [
        {
          title: "Simple Task",
          description: "Do a simple task my friend!"
        },
        {
          title: "Another Simple Task",
          description: "Do another simple task my friend!"
        }
      ]
    }
  }

  render(){

    let todayTaskPapers = this.state.tasks.map((task, index) => {
      return(
        <TaskPaperDetailed
          task={task}
        />
      );
    });

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
            taskPapers={todayTaskPapers}
          />
          <TaskList
            title="All Other Tasks"
            taskPapers={todayTaskPapers}
          />
        </div>
      </div>
    );
  }
}
export default TaskBoard;
