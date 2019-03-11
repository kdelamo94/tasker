let REPEAT_CHOICE = {
  DAILY: 0,
  WEEKLY: 1,
  MONTHLY: 2,
  YEARLY: 3
}

class Task{

  constructor(title, description, complete, completionDate, repeat){
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
    this.repeat = repeat;
  }
}
export default Task;
