import refreshStorage from './refreshStorage.js';

export default function dragging(node) {
  const holder = document.querySelector('.ul-to-do');
  const listItems = document.querySelectorAll('.task-item');
  node.draggable = true;
  node.addEventListener('dragend', () => {
    listItems.forEach((item) => {
      item.classList.remove('bg-gray');
      item.childNodes[1].classList.remove('bg-gray');
    });
    refreshStorage();
    node = undefined;
  });

  holder.addEventListener('dragover', (e) => {
    if (node === undefined) {
      return;
    }
    e.preventDefault();
    node.classList.add('bg-gray');
    node.childNodes[1].classList.add('bg-gray');
    const mouse = e.clientY;
    const positions = [];
    let where;
    listItems.forEach((element) => {
      positions.push(element.getBoundingClientRect().y);
      where = positions.findIndex((item) => item > mouse);
    });
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
  });
}