import add from './modules/add.js';

describe('Add test', () => {
  test('should save to localStorage', () => {
    localStorage.setItem('tasks', '[]');
    add('hello');
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([{ completed: false, description: 'hello', index: 1 }]);
  });
});
