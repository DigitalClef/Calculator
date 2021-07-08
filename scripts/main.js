const mainDisplay = document.querySelector('#main-display');
const mainCalculator = document.querySelector('.main-calculator');
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


del.onclick = deleteNumber;
clear.onclick = clearNumbers;

