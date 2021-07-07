const mainDisplay = document.querySelector('#main-display');
const mainCalculator = document.querySelector('.main-calculator');

mainCalculator.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const newElement = document.createElement('div')
        newElement.innerText = button.dataset.key;
        mainDisplay.appendChild(newElement);
    });
});