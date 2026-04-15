//i need to the time i push a button shows in the ImageCapture, next the operations a limit of 
//1,000,000,000 the posibility of put . 1 time at once. 
const buttons = document.querySelectorAll('.num');
const btnDelete = document.querySelector('#backspace')
const inputField = document.querySelector('#display')

//let currentInput = '0';

function addNumber(digit) {
    inputField.value += digit;
}

 buttons.forEach(btn => {
    btn.addEventListener('click', () => 
        addNumber(btn.value));

      ///  if (!isNaN (value)){
      //      inputNumber(value);
        // if (value === 'Backspace'){
       //   backspace()
      //  }


       // inputUpdate();
    });

btnDelete.addEventListener('click', backspace);

 window.addEventListener('keydown', (e) =>{
    if (e.key >= 0 && e.key <= 9) {
        addNumber(e.key);
    };
    if (e.key === 'Enter') calculateResult();
    if (e.key === 'Backspace') inputField.value = inputField.value.slice(0, -1);
 });

// function inputNumber(num){
  //  if(currentInput === '0' || reset){
  //      currentInput = num;
  //      reset = false;
  //  } else {
  //      currentInput += num;
  //  }
// }

 function inputUpdate(value) {
    inputField.value = value;
 }

 function backspace(){
   inputField.value = inputField.value.slice(0, -1);
 }