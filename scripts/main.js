const mainDisplay = document.querySelector('#main-display');
const mainCalculator = document.querySelector('.main-calculator');
const numbers = document.querySelectorAll('[data-num]');

function display() {
    if (this.dataset.num === '.' && mainDisplay.innerText.includes('.')) {
        return;
    }
    if (mainDisplay.childNodes.length === 0) {
        mainDisplay.innerText = this.dataset.num;
    }
    else {
        mainDisplay.innerText += this.dataset.num.toString();
    }    
    console.log(mainDisplay);
}

numbers.forEach(number => {
    number.onclick = display;
})

