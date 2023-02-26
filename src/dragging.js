function NewObject(description, completed, index) {
  this.description = description;
  this.completed = completed;
  this.index = index;
}
function refresh() {
  const data = JSON.parse(localStorage.getItem('tasks'));
  const tasks = document.querySelectorAll('.task-item');
  const newData = [];
  let index = 1;

  tasks.forEach((task) => {
    for (let i = 0; i < data.length; i += 1) {
      if (task.childNodes[1].value === data[i].description) {
        const orderTask = new NewObject(data[i].description, task.childNodes[0].checked, index);
        newData.push(orderTask);
        index += 1;
      }
    }
  });
  localStorage.setItem('tasks', (JSON.stringify(newData)));
}

export default () => {
  const draggables = document.querySelectorAll('.toDrag:not(.trash-can)');
  const holder = document.querySelector('.ul-to-do');
  let dragged;
  draggables.forEach((button) => {
    button.addEventListener('mousedown', () => {
      button.parentElement.classList.add('dragging')
      button.draggable = false;
      const nodeToDrag = button.parentNode;
      dragged = nodeToDrag;
      button.parentNode.style.backgroundColor = '#777';
      button.parentNode.childNodes[1].style.backgroundColor = '#777';
      button.parentNode.draggable = true;
    })
    button.addEventListener('mouseleave', () => {
      button.parentElement.classList.remove('dragging');
      button.parentNode.draggable = false;
    })
    button.addEventListener('mouseup', () => {
      button.parentElement.classList.remove('dragging');
      button.parentNode.style.backgroundColor = '#fff';
      button.parentNode.childNodes[1].style.backgroundColor = '#fff';
    })
  }) 
  holder.addEventListener('dragover', (e) => {
    e.preventDefault();
    let lastMousePosition;
    const items = document.querySelectorAll('.task-item');
    const arrOfPositions = [];
    items.forEach((item) => {
      arrOfPositions.push(item.getBoundingClientRect().y);
    });
    lastMousePosition = e.clientY;
    const where = arrOfPositions.findIndex((position) => position > lastMousePosition);
    if(where === -1){
      holder.appendChild(dragged)
    } else {
      holder.insertBefore(dragged, items[where]);
    }
    
    console.log(dragged)
    console.log(where)
    console.log(items)
  });
  holder.addEventListener('drop', (event) => {
    event.preventDefault();
    refresh();
  });
  
};
