const mainDisplay = document.querySelector('#main-display');
const mainCalculator = document.querySelector('.main-calculator');
const numbers = document.querySelectorAll('[data-num]');
const operators = document.querySelectorAll('[data-op]');
const del = document.querySelector('[data-delete]');

function display() {
    //Permits user to enter only one decimal
    if (this.dataset.num === '.' && mainDisplay.innerText.includes('.')) {
        return;
    }
    //changes inital value to first number clicked
    if (mainDisplay.childNodes.length === 0) {
        mainDisplay.innerText = this.dataset.num;
    }
    //appends number to current value
    else {
        mainDisplay.innerText += this.dataset.num.toString();
    }    
   // console.log(mainDisplay);
}

//removes last digit of number
function deleteNumber() {
    mainDisplay.innerText = mainDisplay.innerText.slice(0, -1);
}

numbers.forEach(number => {
    number.onclick = display;
})

del.onclick = deleteNumber;


