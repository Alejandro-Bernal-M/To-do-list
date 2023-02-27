import {dots} from './index.js'
import refresh from './refresh.js';

const holder = document.querySelector('.ul-to-do');

export default function addTask(description) {
  const newLi = document.createElement('li');
  newLi.classList.add('li-to-do');
  newLi.classList.add('task-item');
  newLi.innerHTML = `<input type="checkbox"  class="checkbox"><input type="text" class="li-description task-text" value ="${description}"><img src="${dots}" class="icon toDrag">`;
  holder.appendChild(newLi);
  refresh();
}
