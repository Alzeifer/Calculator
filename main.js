//i need to the time i push a button shows in the ImageCapture, next the operations a limit of 
//1,000,000,000 the posibility of put . 1 time at once. 
const buttons = document.querySelectorAll('.num');
const btnDelete = document.querySelector('#backspace');
const inputField = document.querySelector('#display');

let prevValue = '';
let operator = '';
let currentValue = '0';

//inputNumber
function addNumber(digit) {
   if (currentValue === '0' && digit === '0'){
      return
   };

   if(currentValue === '0' && digit !== '.'){
      currentValue = digit;
   } else {
    currentValue += digit;
   }
   inputUpdate();
}

//buttonsFunctions
 buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const noValue = btn.textContent;

        if (!isNaN (noValue)){
            addNumber(noValue);

        } else if (noValue === "C"){
         clearInput();

        } else if (noValue === '='){
         calculateResult();

        }else if (noValue === '.'){
         addDot();

        }else if (noValue === '+/-'){
         positiveNegative();

        }else{
         handleOperator(noValue);
        }

      });
   });

   //backspaceButton
btnDelete.addEventListener('click', backspace);


   //keyboardFunction
 window.addEventListener('keydown', (e) =>{
    if (e.key >= 0 && e.key <= 9) {
        addNumber(e.key);
    };
    if (e.key === 'Enter') calculateResult();
    if (e.key === 'Backspace') backspace();
    if (e.key === 'Escape'){
      clearInput();
    }
    if (e.key === '.') addDot();
    if (['+', '-', '*', '/'].includes(e.key)){
      handleOperator(e.key);
    }
 });


 function inputUpdate() {
    inputField.value = currentValue || prevValue || '0';
 };


 function backspace(){
   currentValue = currentValue.slice(0, -1);
   inputUpdate();
 };


 function clearInput(){
    currentValue = "";
    inputUpdate();
 };
 

 function addDot(){
   if(currentValue.includes('.')) return;
   if (currentValue === '0' || currentValue === ''){
      currentValue = '0.';
   } else{
      currentValue += '.';
   }

   inputUpdate();
 };

 //OperationCall
 function handleOperator(op){

   if (currentValue === '' && prevValue !== '') {
      operator = op;
       return;
   }

   if (prevValue !== '' && currentValue !== '') {
      calculateResult();
   }

   operator = op;
   prevValue = currentValue;

   currentValue = '';


 }

 //CalculationsBrain
 function operate(a, b, op) {
   a = Number(a);
   b = Number(b);

   switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b === 0 ? "ERROR" : a / b;
      default : return b;
   };
 };

 function calculateResult() {
   if ( operator === '' || prevValue === '') return;

   const result = operate(prevValue, currentValue, operator);

   currentValue = result.toString();
   prevValue = '';
   operator = '';

   inputUpdate();
 }

function positiveNegative(){
   if (currentValue === '' || currentValue === '0') return;

   currentValue = parseFloat((currentValue) * -1).toString();

   inputUpdate();
}

 