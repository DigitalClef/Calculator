const mainDisplay = document.querySelector('#main-display');
const mainCalculator = document.querySelector('.main-calculator');
const numbers = document.querySelectorAll('[data-num]');

function display() {
    mainDisplay.innerText = this.dataset.num;
}

numbers.forEach(number => {
    number.onclick = display;
})


console.log(numbers);