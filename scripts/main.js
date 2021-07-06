const mainDisplay = document.querySelector('#main-display');
const mainCalculator = document.querySelector('.main-calculator');

mainCalculator.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        mainDisplay.innerText = button.dataset.key;
    });
});