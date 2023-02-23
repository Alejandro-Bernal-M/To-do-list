import remove from './remove.js';

export default () => {
  const checkboxs = document.querySelectorAll('.checkbox');
  checkboxs.forEach((box) => {
    if (box.checked === true) {
      remove(box.nextSibling.value);
      box.parentElement.remove();
    }
  });
};