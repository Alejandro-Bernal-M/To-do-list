import refreshStorage from './refreshStorage.js';

export default (node) => {
  const holder = document.querySelector('.ul-to-do');
  const listItems = document.querySelectorAll('.task-item');
  node.draggable = true;
  node.addEventListener('touchend', () => {
    listItems.forEach((item) => {
      item.classList.remove('bg-gray');
      item.childNodes[1].classList.remove('bg-gray');
    });
    refreshStorage();
    node = undefined;
  });

  holder.addEventListener('touchmove', (e) => {
    if (node === undefined) {
      return;
    }
    e.preventDefault();
    node.classList.add('bg-gray');
    node.childNodes[1].classList.add('bg-gray');
    const positions = [];
    let where;
    listItems.forEach((element) => {
      positions.push(element.getBoundingClientRect().y);
      where = positions.findIndex((item) => item > e.touches[0].clientY);
    });
    const nodeToinsertBefore = listItems[where];
    if (nodeToinsertBefore === undefined) {
      holder.appendChild(node);
    } else {
      holder.insertBefore(node, nodeToinsertBefore);
    }
  });
};