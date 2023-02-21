import './styles.css';
import dots from './icons/dots.png';
import refresh from './icons/refresh.png';
import enter from './icons/enter.png';

const holder = document.querySelector('.ul-to-do');

const tasks = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 2,
  },
  {
    description: 'walk the dog',
    completed: false,
    index: 1,
  },
  {
    description: 'do exercise',
    completed: false,
    index: 0,
  },
];

const refreshIcon = document.querySelector('.refresh');
refreshIcon.src = refresh;

const enterIcon = document.querySelector('.enter');
enterIcon.src = enter;

function listConstructor() {
  tasks.sort((x, y) => x.index - y.index);
  tasks.forEach((item) => {
    const newLi = document.createElement('li');
    newLi.classList.add('li-to-do');
    newLi.innerHTML = `<input type="checkbox" class="checkbox"> <span class="li-description">${item.description}</span> <img src="${dots}" class="icon">`;
    holder.appendChild(newLi);
  });
}

listConstructor();