const mainDisplay = document.querySelector('#main-display');
let previousOperand = 0;
let currentOperand = '';
let currentOperator = '';
const numbers = document.querySelectorAll('[data-num]');
const operators = document.querySelectorAll('[data-op]');
const del = document.querySelector('[data-delete]');
const clear = document.querySelector('[data-clear]');
const execute = document.querySelector('[data-equal]');

// function display() {
//     //Permits user to enter only one decimal
//     if (this.dataset.num === '.' && mainDisplay.innerText.includes('.')) {
//         return;
//     }
    

//     //changes inital value to first number clicked
//     if (mainDisplay.innerText === '0') {
    
//         mainDisplay.innerText = this.dataset.num;
//     }
//     //appends number to current value
//     else {
//         mainDisplay.innerText += this.dataset.num.toString();
//     };
// }



function appendNum() {
    currentOperand += this.dataset.num.toString();
    mainDisplay.innerText = currentOperand;
    
}

function operation() {
    previousOperand = parseFloat(mainDisplay.innerText);
    currentOperand = '';
    currentOperator = this.dataset.op;

}

//Performs corresponding operation on the two numbers
function executeOperation() {
    currentOperand = mainDisplay.innerText;
    console.log(previousOperand)
    console.log(currentOperand);
    switch (currentOperator) {
        
        case '+':
            mainDisplay.innerText = previousOperand + currentOperand;
            break;
        case '-':
            mainDisplay.innerText = previousOperand - currentOperand;
            break;
        case '÷':
            mainDisplay.innerText = previousOperand / currentOperand;

            break;
        case 'x':
            mainDisplay.innerText = previousOperand * currentOperand;
            break;
    }

    previousOperand = currentOperand;
}

//removes last digit of number
function deleteNumber() {
    if (mainDisplay.innerText === '0') {
        return;
    }
    mainDisplay.innerText = mainDisplay.innerText.slice(0, -1);  

    if (mainDisplay.innerText.length === 0) {
        clearNumbers();
    }   
}

function clearNumbers() {
    currentOperand = '';
    mainDisplay.innerText = '0';
}

numbers.forEach(number => {
    number.onclick = appendNum;
})
operators.forEach(number => {
    number.onclick = operation;
})

del.onclick = deleteNumber;
clear.onclick = clearNumbers;
execute.onclick = executeOperation;

