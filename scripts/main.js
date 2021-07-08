const mainDisplay = document.querySelector('#main-display');
const mainCalculator = document.querySelector('.main-calculator');
const userNumber = document.createElement('div');;
mainCalculator.querySelectorAll('[data-key').forEach(button => {
    button.addEventListener('click', function() {
        const userNumber = document.createElement('div');
        userNumber.innerText = button.dataset.key;
        mainDisplay.appendChild(userNumber);
        }
    );
    console.log(userNumber);
});