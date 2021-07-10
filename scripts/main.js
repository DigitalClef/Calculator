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
};

function lengthChecker(value) {
    if (value.length < 14) {
        return true;
    }
};

function appendNumber() {
    //implemented so that numbers do not exceed display window of calculator
    if (lengthChecker(currentOperand)) {
        if (mainDisplay.innerText === '0') {
            currentOperand = this.innerText.toString();
        }
        else {
            currentOperand += this.innerText.toString();
        }
        display(currentOperand);
    }
}

function setOperator() {
    currentOperator = this.innerText;
    previousOperand = mainDisplay.innerText;
    currentOperand = '';
};

function solve() {
    if (currentOperator === undefined) {
        return;
    };
    
    let final = 0
    let prev = parseFloat(previousOperand);
    let curr = parseFloat(currentOperand);
    console.log(prev, curr);
    if (isNaN(prev) || isNaN(curr)) {
        return;
    }
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
        default:
            return;
    }

    if ((final % 1) !== 0) {
        final = final.toFixed(3);
    }
    if (final.toString().length >= 14) {
        final = final.toExponential(4);
    }
    display(final);
    previousOperand = final;
    currentOperand = '';
    currentOperator = undefined;
};

function clearNumbers() {
    currentOperand = '0';
    display(currentOperand);
};

function deleteNumbers() {
    currentOperand = mainDisplay.innerText;
    if (currentOperand.length === 1) {
        clearNumbers();
        return;
    }
    currentOperand = currentOperand.slice(0, -1);
    display(currentOperand);
};

numbers.forEach(button => {
    button.onclick = appendNumber;
});

operators.forEach(button => {
    button.onclick = setOperator;
});

document.onkeydown = function(e) {
    console.log(e.key);
}

execute.onclick = solve;
clear.onclick = clearNumbers;
del.onclick = deleteNumbers;