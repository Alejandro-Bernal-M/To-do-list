import remove from './remove.js';


export default () => {
  const checkboxs = document.querySelectorAll('.checkbox');
  console.log(checkboxs)
  const arr = Array.from(checkboxs)
  const checkboxCheck = arr.filter((check) => check.checked === true);
  // checkboxs.forEach((box) => {
  //   if (box.checked === true) {
  //     remove(box.nextSibling.value);
  //     box.parentElement.remove();
  //   }
  // });
checkboxCheck.forEach((cheked) => {
  remove(cheked.nextSibling.value)
  cheked.parentElement.remove();
})
  console.log(checkboxCheck[0].nextSibling.value)
};