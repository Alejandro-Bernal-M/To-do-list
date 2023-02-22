import './styles.css';
import dots from './icons/dots.png';
import refresh from './icons/refresh.png';
import enter from './icons/enter.png';
import { addTask } from './add.js';

const inputAdd = document.getElementById('add-text');
const refreshIcon = document.querySelector('.refresh');
const enterIcon = document.querySelector('.enter');
const holder = document.querySelector('.ul-to-do');

refreshIcon.src = refresh;
enterIcon.src = enter;

function listConstructor() {
  if(localStorage.getItem('tasks') === '' ) {
    localStorage.setItem('tasks', '[]')
  }
  const toConstruct = JSON.parse(localStorage.getItem('tasks'));
  toConstruct.sort((x, y) => x.index - y.index);
  toConstruct.forEach((item) => {
    const newLi = document.createElement('li');
    newLi.classList.add('li-to-do');
    newLi.innerHTML = `<input type="checkbox" class="checkbox"><input type="text" class="li-description" value ="${item.description}"><img src="${dots}" class="icon">`;
    holder.appendChild(newLi);
  });
}

listConstructor();

function deletePrevious() {
  const children = holder.childNodes;
  let counter = children.length
  for (let i = 5; i < counter; i += 1) {
    if(children.length > 4) {
      console.log(children[5])
      holder.removeChild(children[5]);
    }
    
  }
}

inputAdd.onchange = () => {
  deletePrevious();
  addTask(inputAdd.value);
  inputAdd.value = '';
  listConstructor();
}
