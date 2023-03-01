import add from './modules/add.js';
import remove from './modules/remove.js';

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
});
