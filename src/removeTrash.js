import remove from './remove.js';

export default () => {
  const trash = document.querySelector('.trash-can');
  trash.onclick = () => {
    remove(trash.previousSibling.value);
  }
  // const icons = document.querySelectorAll('.icon');
  // icons.forEach((icon) => {
  //   icon.addEventListener('click', () => {
  //     if (icon.classList.contains('trash-can') === true) {
  //       remove(icon.previousSibling.value);
  //     }
  //   })
  // })
}
