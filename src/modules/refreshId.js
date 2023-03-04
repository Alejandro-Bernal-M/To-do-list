export default () => {
  const items = document.querySelectorAll('.task-text');
  let newId = 1;
  items.forEach((item) => {
    item.id = newId;
    newId += 1;
  });
};