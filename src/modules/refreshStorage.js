import refreshId from './refreshId.js';

function NewObject(description, completed, index) {
  this.description = description;
  this.completed = completed;
  this.index = index;
}

export default () => {
  const tasks = document.querySelectorAll('.task-item');
  const newData = [];
  let index = 1;
  refreshId();
  tasks.forEach((task) => {
    const orderTask = new NewObject(task.childNodes[1].value, task.childNodes[0].checked, index);
    newData.push(orderTask);
    index += 1;
  });
  localStorage.setItem('tasks', (JSON.stringify(newData)));
};