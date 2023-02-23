function Task(description) {
  this.description = description;
  this.completed = false;
}

let tasks = [

];

export default function addTask(description) {
  const newTask = new Task(description);
  tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.push(newTask);
  let index = 1;
  tasks.forEach((item) => {
    item.index = index;
    index += 1;
  });
  const toStore = JSON.stringify(tasks);
  localStorage.setItem('tasks', toStore);
}
