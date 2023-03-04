export default (id, newDescription) => {
  const toModify = JSON.parse(localStorage.getItem('tasks'));
  toModify.forEach((element) => {
    if (element.index === +id) {
      element.description = newDescription;
    }
  });
  const toStorage = JSON.stringify(toModify);
  localStorage.setItem('tasks', toStorage);
};