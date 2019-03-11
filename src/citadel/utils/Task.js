let REPEAT_CHOICE = {
  DAILY: 0,
  WEEKLY: 1,
  MONTHLY: 2,
  YEARLY: 3
}

class Task{

  constructor(title, description, complete, completionDate){
    this.REPEAT_CHOICE = {
      DAILY: 0,
      WEEKLY: 1,
      MONTHLY: 2,
      YEARLY: 3
    };

    this.title = title;
    this.description = description;
    this.complete = complete;
    this.completionDate = completionDate;
  }
}
export default Task;
