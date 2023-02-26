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

function getElementBefore(y) {
  const draggables = document.querySelectorAll('.task-item:not(.dragging)');
  const arrDraggables = Array.from(draggables);

  return arrDraggables.reduce((closest, child) => {
    let toReturn;
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      toReturn = { offset, element: child };
    } else {
      toReturn = closest;
    }
    return toReturn;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

export default () => {
  const draggables = document.querySelectorAll('.toDrag:not(.trash-can)');
  
  const holder = document.querySelector('.ul-to-do');
  let dragged;
  draggables.forEach((button) => {
    button.addEventListener('mousedown', () => {
      const items = document.querySelectorAll('.task-item');
      const arrOfPositions = [];
      items.forEach((item) => {
        arrOfPositions.push(item.getBoundingClientRect().y);
      });
      console.log('one', arrOfPositions)
      button.parentElement.classList.add('dragging')
      button.draggable = false;
      const nodeToDrag = button.parentNode;
      button.parentNode.style.backgroundColor = '#777';
      button.parentNode.childNodes[1].style.backgroundColor = '#777';
      button.parentNode.draggable = true;
      nodeToDrag.addEventListener('dragstart', () => {
        dragged = nodeToDrag;
      });
      let lastMousePosition;
      holder.addEventListener('dragover', (e) => {
        e.preventDefault();
        lastMousePosition = e.clientY;
        const where = arrOfPositions.findIndex((position) => position > lastMousePosition);
        // if(where === -1) {

        // }
        holder.insertBefore(dragged, items[where]);
      });
      nodeToDrag.addEventListener('dragend', () => {

      });
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

  // draggables.forEach((draggable) => {
  //   draggable.addEventListener('dragstart', (event) => {
  //     draggable.parentElement.classList.add('dragging');
  //     draggable.parentElement.draggable = true;
  //     draggable.parentElement.style.backgroundColor = '#777';
  //     draggable.parentElement.childNodes[1].style.backgroundColor = '#777';
  //     dragged = event.target.parentElement;
  //   });
  //   draggable.addEventListener('dragend', () => {
  //     draggable.parentElement.classList.remove('dragging');
  //     draggable.parentElement.draggable = false;
  //   });
  // });

  // holder.addEventListener('dragover', (e) => {
  //    e.preventDefault();
  // const elementBefore = getElementBefore(e.clientY);
  // if (elementBefore === null || elementBefore === undefined) {
  //   holder.appendChild(dragged);
  // } else {
  //   holder.insertBefore(dragged, elementBefore);
  // }
  //});

  holder.addEventListener('drop', (event) => {
    event.preventDefault();
    refresh();
  });
};
