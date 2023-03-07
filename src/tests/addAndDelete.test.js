import add from '../modules/add.js';
import remove from '../modules/remove.js';
import editTask from '../modules/editTask.js';
import check from '../modules/check.js';
import clearAllCompleted from '../modules/clearAllCompleted.js';

describe('Add test', () => {
  test('should save to localStorage', () => {
    localStorage.setItem('tasks', '[]');
    add('hello');
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([{ completed: false, description: 'hello', index: 1 }]);
  });
});

describe('Remove test', () => {
  test('should remove from localstorage', () => {
    localStorage.setItem('tasks', JSON.stringify([{ completed: false, description: 'task1', index: 1 }]));
    remove('task1');
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([]);
  });

  test('Should remove element from DOM', () => {
    document.body.innerHTML = `<div> 
    <ul class="ul-to-do"><li><input type="checkbox"  class="checkbox"><input type="text" class="li-description task-text" value ="task1"><img  class="trash-can"></li></ul>' 
    </div>`;
    remove('task1');
    expect(document.querySelector('.ul-to-do').childNodes.length).toEqual(0);
  });
});

describe('edit task', () => {
  test('should edit the content', () => {
    localStorage.setItem('tasks', JSON.stringify([{ completed: false, description: 'task1', index: 1 }]));
    editTask('1', 'newTask');
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([{ completed: false, description: 'newTask', index: 1 }]);
  });
});

describe('change on status', () => {
  test('should change the status', () => {
    document.body.innerHTML = `<div> 
    <ul class="ul-to-do"><li><input type="checkbox" class="checkbox" ><input id="1" type="text" class="li-description task-text" value ="task1"><img  class="trash-can"></li></ul>' 
    </div>`;
    localStorage.setItem('tasks', JSON.stringify([{ completed: false, description: 'task1', index: 1 }]));
    const click = document.querySelector('.checkbox');
    check();
    click.click();
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([{ completed: true, description: 'task1', index: 1 }]);
  });
});

describe('remove completed tasks', () => {
  test('should remove all completed tasks', () => {
    localStorage.setItem('tasks', JSON.stringify([{ completed: true, description: 'task1', index: 1 }]));
    clearAllCompleted();
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([]);
  });
});