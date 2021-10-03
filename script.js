'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = `Correct number 🥳`;

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 'wtf';

document.querySelector('.score').textContent = 50;

document.querySelector('.guess').value = '12';

console.log(document.querySelector('.guess').value);*/

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNow = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  document.querySelector(`.number`).textContent = guess;

  const clickPenalty = function () {
    if (scoreNow > 0) {
      scoreNow--;
      document.querySelector('.score').textContent = scoreNow;

      if (scoreNow === 0 || scoreNow < 0) {
        document.querySelector('.message').textContent = 'You lose :p';
      }
    }
  };

  const sewtHighScore = function () {
    let highScore = Number(document.querySelector('.highscore').textContent);
    let newScore = Number(document.querySelector('.score').textContent);
    if (highScore < newScore) {
      document.querySelector('.highscore').textContent = newScore;
    }
  };

  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter a number';
  } else if (guess > randomNumber) {
    document.querySelector('.message').textContent = 'Try lower';
    clickPenalty();
  } else if (guess < randomNumber) {
    document.querySelector('.message').textContent = 'Try higher';
    clickPenalty();
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = `Correct number 🥳`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    sewtHighScore();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start Guessing ...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  scoreNow = 20;
  randomNumber = Math.trunc(Math.random() * 20);
  document.querySelector(`.number`).textContent = `?`;
});
