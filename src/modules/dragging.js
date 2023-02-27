function NewObject(description, completed, index) {
  this.description = description;
  this.completed = completed;
  this.index = index;
}
function refresh() {
  const tasks = document.querySelectorAll('.task-item');
  const newData = [];
  let index = 1;

  tasks.forEach((task) => {
    const orderTask = new NewObject(task.childNodes[1].value, task.childNodes[0].checked, index);
    newData.push(orderTask);
    index += 1;
  });
  localStorage.setItem('tasks', (JSON.stringify(newData)));
}

export default function dragging(node) {
  const holder = document.querySelector('.ul-to-do');
  const listItems = document.querySelectorAll('.task-item');
  node.draggable = true;
  node.addEventListener('dragstart', () => {
    node.style.backgroundColor = '#777';
    node.childNodes[1].style.backgroundColor = '#777';
  });
  node.addEventListener('dragend', () => {
    node = undefined;
    return 0;
  });

  holder.addEventListener('dragover', (e) => {
    if (node === undefined) {
      return;
    }
    e.preventDefault();
    node.style.backgroundColor = '#777';
    node.childNodes[1].style.backgroundColor = '#777';
    const mouse = e.clientY;
    const positions = [];
    listItems.forEach((element) => {
      positions.push(element.getBoundingClientRect().y);
    });
    const where = positions.findIndex((item) => item > mouse);
    const nodeToinsertBefore = listItems[where];
    if (nodeToinsertBefore === undefined) {
      holder.appendChild(node);
    } else {
      holder.insertBefore(node, nodeToinsertBefore);
    }
  });

  holder.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    node = undefined;
    refresh();
  });
}