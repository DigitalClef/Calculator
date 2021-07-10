const mainDisplay = document.querySelector('#main-display');
let previousOperand = '';
let currentOperand = '';
let currentOperator = undefined;
const numbers = document.querySelectorAll('[data-num]');
const operators = document.querySelectorAll('[data-op]');
const del = document.querySelector('[data-delete]');
const clear = document.querySelector('[data-clear]');
const execute = document.querySelector('[data-equal]');

function display(value) {
    mainDisplay.innerText = value;
}

function appendNumber() {
    //implemented so that numbers do not exceed display window of calculator
    if (currentOperand.length >= 14) {
        return;
    }
    currentOperand += this.innerText.toString();
    display(currentOperand);
}

function setOperator() {
    currentOperator = this.innerText;
    previousOperand = currentOperand;
    currentOperand = '';
}

function solve() {
    let final = 0
    let prev = parseFloat(previousOperand);
    let curr = parseFloat(currentOperand);
    
    switch (currentOperator) {
        case '÷': 
            final = prev / curr;
            break;
        case '+':
            final = prev + curr;
            break;
        case '-':
            final = prev - curr;
            break;
        case 'x':
            final = prev * curr;
            break;
    }
    display(final);
    previousOperand = final;
}

numbers.forEach(button => {
    button.onclick = appendNumber;
});

operators.forEach(button => {
    button.onclick = setOperator;
});

execute.onclick = solve;