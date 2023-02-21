const button = document.querySelector('#btnId')!;
const onBtnClick = () => {
  console.log("you click on button")
};

console.log(button);

button.addEventListener('click', onBtnClick);