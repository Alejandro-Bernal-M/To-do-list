import './styles.css';
import dots from './icons/dots.png';
import refresh from './icons/refresh.png';
import enter from './icons/enter.png';
import trash from './icons/trash.png';
import addTask from './add.js';
import removeTrash from './removeTrash.js';
import editTask from './editTask.js';
import check from './check.js';
import clearAllCompleted from './clearAllCompleted.js';
import dragging from './dragging.js';

const inputAdd = document.getElementById('add-text');
const refreshIcon = document.querySelector('.refresh');
const enterIcon = document.querySelector('.enter');
const holder = document.querySelector('.ul-to-do');
const buttonClear = document.querySelector('.btn-holder');
let  test;
export {dots, test}

refreshIcon.src = refresh;
enterIcon.src = enter;

function changeIcon() {
  const tasksItems = document.querySelectorAll('.task-item');
  const taskText = document.querySelectorAll('.task-text');
  taskText.forEach((task) => {
    task.addEventListener('click', () => {
      task.nextSibling.src = trash;
      task.nextSibling.classList.add('trash-can');
      task.style.backgroundColor = 'rgb(240, 233, 166)';
      task.parentNode.style.backgroundColor = 'rgb(240, 233, 166)';
      removeTrash();
    });
    const currentValue = task.value;
    task.addEventListener('change', () => {
      editTask(currentValue, task.value);
    });
  });
  tasksItems.forEach((item) => {
    item.addEventListener('mouseleave', () => {
      item.lastChild.src = dots;
      item.lastChild.classList.remove('trash-can');
      item.style.backgroundColor = '#fff';
      item.childNodes[1].style.backgroundColor = '#fff';
    });
  });
}

function listConstructor() {
  if (localStorage.getItem('tasks') === '' || localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', '[]');
  }
  const toConstruct = JSON.parse(localStorage.getItem('tasks'));
  toConstruct.sort((x, y) => x.index - y.index);
  toConstruct.forEach((item) => {
    const newLi = document.createElement('li');
    newLi.classList.add('li-to-do');
    newLi.classList.add('task-item');
    let compOrNot = 'none';
    if (item.completed === true) {
      compOrNot = 'line-through';
    }
    newLi.innerHTML = `<input type="checkbox"  class="checkbox"><input type="text" class="li-description task-text" style="text-decoration: ${compOrNot}" value ="${item.description}"><img src="${dots}" class="icon toDrag">`;
    holder.appendChild(newLi);
  });

  changeIcon();
  check();
  test = 1;
  if (localStorage.getItem('tasks') !== '[]' ){
    dragging();
  }
}

inputAdd.addEventListener('keypress', (e) => {
  if( e.key === 'Enter') {
    addTask(inputAdd.value);
    inputAdd.value = '';
  }
  test = 0;
  dragging()
  //test = 1;
});

window.onload = () => {
  if (localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', '[]');
  }
  listConstructor();
};

buttonClear.onclick = () => {
  clearAllCompleted();
};
