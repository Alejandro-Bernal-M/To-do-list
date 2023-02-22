

function Task (description) {
  this.description = description;
  this.completed = false;
}

export let tasks = [
  
];

export function addTask (description) {
  const newTask = new Task(description);
  tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.push(newTask)
  tasks.forEach((item )=> {
    let index = 0;
    item.index = index;
    index += 1;
  });
  const toStore = JSON.stringify(tasks);
  localStorage.setItem('tasks', toStore);
}

