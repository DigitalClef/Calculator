//Initialize variables
const mainDisplay = document.querySelector('#main-display');
const numbers = document.querySelectorAll('[data-num]');
const operators = document.querySelectorAll('[data-op]');
const del = document.querySelector('[data-delete]');
const clear = document.querySelector('[data-clear]');
const execute = document.querySelector('[data-equal]');
let previousOperand = '';
let currentOperand = '';
let currentOperator = undefined;

//Updates the output onto the display window of the calculator
function display(value) {
    mainDisplay.innerText = value;
};

//Allows users to input to enter certain amount of characters that fit in the display window
function lengthChecker(value) {
    if (value.length < 10) {
        return true;
    }
};

//Appends character that user inputs
function appendNumber(value) {
    //implemented so that numbers do not exceed display window of calculator
    if (value === '.' && currentOperand.includes('.')) {
        return;
    }
    
    //Changes initial zero on display window rather than append to it
    if (lengthChecker(currentOperand)) { 
        if (mainDisplay.innerText === '0') {
            currentOperand = value.toString();
        }
        else {
            currentOperand += value.toString();
        }
        display(currentOperand);
    }
};

//Assigns operator based on user input
function setOperator(value) {
    if (currentOperator !== undefined) { //Allows user to chain operations before hitting execution button
        solve();
    }
    currentOperator = value;
    previousOperand = mainDisplay.innerText;
    currentOperand = '';
};

//Executes the operation
function solve() {
    if (currentOperator === undefined) { //Ensures that user inputs an operation
        return;
    };
    
    let final = 0
    let prev = parseFloat(previousOperand);
    let curr = parseFloat(currentOperand);
    
    if (isNaN(prev) || isNaN(curr)) { //Ensures that user has two defined inputs as operands
        return;
    }
    switch (currentOperator) { //Verfies which operation to perform based on user input
        case '÷': 
        case '/':
            if (curr === 0) { // Main window displays an error message if user attempts to divide by zero
                final = 'Error';
                display(final);
                currentOperand = '';
                previousOperand = '';
                return;
            }
            else {
                final = prev / curr;
                break;
            }
        case '+':
            final = prev + curr;
            break;
        case '-':
            final = prev - curr;
            break;
        case 'x':
        case '*':
            final = prev * curr;
            break;
        default:
            return;
    }
    
    // Changes numerical format to scientific notation if the output exceeds the space within the viewing window
    if ((final.toString().length > 10 && Math.abs(final) > 9999999999) || Math.abs(final) <= .0001) { 
        final = final.toExponential(4);
    }
    else if (Math.abs(final) >= 1 && (final % 1) !== 0) { //Only allows two decimal places if number is positive
        final = final.toFixed(2);
    }
    else if (Math.abs(final) < 1) { //Only allows four decimal places if the number is negative
        final = final.toFixed(4);
    }
    display(final);
    previousOperand = final;
    currentOperand = '';
    currentOperator = undefined;
};

//Resets the main viewing window to display 0
function clearNumbers() {
    currentOperand = '0';
    previousOperand = '';
    display(currentOperand);
};

//Removes the last character of the string displayed on the main viewing window
function deleteNumbers() {
    currentOperand = mainDisplay.innerText;
    if (currentOperand.length === 1) { //Implemented so that 0 is displayed after the last character on main viewing window
        clearNumbers();                //has been deleted
        return;
    }
    currentOperand = currentOperand.slice(0, -1);
    display(currentOperand);
};

//User clicks a number button
numbers.forEach(button => {
    button.onclick = function() {
        appendNumber(button.innerText);
    }
});

//User clicks an operation button
operators.forEach(button => {
    button.onclick = function() {
        setOperator(button.innerText);
    }
});

execute.onclick = solve; //User clicks the equal sign button
clear.onclick = clearNumbers; //User clicks clear button
del.onclick = deleteNumbers; //User clicks delete button

//Implements keyboard functionality
document.onkeydown = function(e) {
    if (e.key >=0 && e.key <= 9) { //Users keys a number
        appendNumber(e.key);
    }
    if (e.key === '+' || e.key === '-' || e.key === '/' || e.key === '*') { //User keys an operation
        setOperator(e.key);
    }
    switch (e.key) { //User keys other inputs
        case 'Enter':
            solve();
            break;
        case 'Backspace':
            deleteNumbers();
            break;
        case ' ':
            clearNumbers();
            break;
        case '.':
            appendNumber(e.key);
            break;
    }
};
