'use strict';
let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 30;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('← Enter A Number');

    } else if (guess === secretNumber) {
        displayMessage('Well Done!');

        document.querySelector('body').style.backgroundColor = '#58c05d';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#a94848';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 30;
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#303a4e';
});