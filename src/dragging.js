import refresh from "./refresh.js";
import { test } from "./index.js";

export default () => {
  if( test === 0){
    return;
  }
  let draggables = document.querySelectorAll('.toDrag:not(.trash-can)');
  let items = document.querySelectorAll('.task-item');
  const holder = document.querySelector('.ul-to-do');
  let dragged;
  draggables.forEach((button) => {
    if( test === 0){
      return;
    }
    button.addEventListener('mousedown', () => {
      button.parentElement.classList.add('dragging')
      button.draggable = false;
      const nodeToDrag = button.parentNode;
      dragged = nodeToDrag;
      button.parentNode.style.backgroundColor = '#777';
      button.parentNode.childNodes[1].style.backgroundColor = '#777';
      button.parentNode.draggable = true;
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
  holder.addEventListener('dragover', (e) => {
    e.preventDefault();
    let lastMousePosition;
    const arrOfPositions = [];
    items.forEach((item) => {
      arrOfPositions.push(item.getBoundingClientRect().y);
    });
    lastMousePosition = e.clientY;
    const where = arrOfPositions.findIndex((position) => position > lastMousePosition);
    if(where === -1){
      holder.appendChild(dragged)
    } else {
      holder.insertBefore(dragged, items[where]);
    }   
  });
  holder.addEventListener('drop', (event) => {
    event.preventDefault();
    dragged=null;
    refresh();
    items = document.querySelectorAll('.task-item');
    console.log(test)
  });
  
};
