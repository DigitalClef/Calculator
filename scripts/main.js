const mainDisplay = document.querySelector('#main-display');
let previousOperand = 0;
let currentOperand = 0;
let currentOperator = '';
const numbers = document.querySelectorAll('[data-num]');
const operators = document.querySelectorAll('[data-op]');
const del = document.querySelector('[data-delete]');
const clear = document.querySelector('[data-clear]');
const execute = document.querySelector('[data-equal]');

function display() {
    
    //Permits user to enter only one decimal
    if (this.dataset.num === '.' && mainDisplay.innerText.includes('.')) {
        return;
    }
    //changes inital value to first number clicked
    if (mainDisplay.innerText === '0') {
    
        mainDisplay.innerText = this.dataset.num;
    }
    //appends number to current value
    else {
        mainDisplay.innerText += this.dataset.num.toString();
    };
}

function operation() {
    previousOperand = parseFloat(mainDisplay.innerText);
    mainDisplay.innerText = '';
    currentOperator = this.dataset.op;

}

//Performs corresponding operation on the two numbers
function executeOperation() {
    let newMain = parseFloat(mainDisplay.innerText);
    switch (currentOperator) {
        case '+':
            mainDisplay.innerText = previousOperand + newMain;
            break;
        case '-':
            mainDisplay.innerText = previousOperand - newMain;
            break;
        case '÷':
            mainDisplay.innerText = previousOperand / newMain;
            break;
        case 'x':
            mainDisplay.innerText = previousOperand * newMain;
            break;
        
    }

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
    mainDisplay.innerText = '0';
}

numbers.forEach(number => {
    number.onclick = display;
})
operators.forEach(number => {
    number.onclick = operation;
})

del.onclick = deleteNumber;
clear.onclick = clearNumbers;
execute.onclick = executeOperation;

