import refreshId from './refreshId.js';

export default (id) => {
  const toModify = JSON.parse(localStorage.getItem('tasks'));
  toModify.splice(id - 1, 1);
  let newIndex = 1;
  toModify.forEach((element) => {
    element.index = newIndex;
    newIndex += 1;
  });
  localStorage.setItem('tasks', JSON.stringify(toModify));
  const trashCans = document.querySelectorAll('.trash-can');
  trashCans.forEach((can) => {
    can.parentElement.remove();
  });
  refreshId();
};
