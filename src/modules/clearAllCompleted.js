import refreshId from './refreshId.js';
import remove from './remove.js';

export default () => {
  const checkboxs = document.querySelectorAll('.checkbox');
  checkboxs.forEach((checked) => {
    if (checked.checked === true) {
      remove(checked.nextSibling.id, checked);
    }
    refreshId();
  });
};