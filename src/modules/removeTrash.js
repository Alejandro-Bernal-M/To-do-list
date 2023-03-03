import remove from './remove.js';

export default () => {
  const trash = document.querySelector('.trash-can');
  trash.onclick = () => {
    remove(trash.previousSibling.value);
    const items = document.querySelectorAll('.task-text');
    let newId = 1;
    items.forEach((item) => {
      item.id = newId;
      newId += 1;
    });
  };
};
