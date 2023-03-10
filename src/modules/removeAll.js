import refreshId from './refreshId.js';
import remove from './remove.js';

export default () => {
  const items = document.querySelectorAll('.task-item');
  items.forEach((item) => {
    remove(item.childNodes[1].id, item.childNodes[1]);
    refreshId();
  });
};