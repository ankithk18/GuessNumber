'use strict';

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No Number ⛔');
  } else if (guess === number) {
    displayMessage('Correct Number 🎉');
    document.querySelector('.number').textContent = number;
    setBackgroundColor('#54B435');
    setWidth('30rem');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too high📈' : 'Too Low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game 💣');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  setBackgroundColor('#222');
  setWidth('15rem');
});
