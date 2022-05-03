'use strict';

const RESULT = {
  LOW: 'Too Low',
  HIGH: 'Too High',
  CORRECT: 'Answer',
  GAME_OVER: 'Game Over! Try Again',
  GUESS: 'Start Guessing',
};

const gameContext = {
  score: 20,
  highScore: 0,
  answer: Number.parseInt(Math.random() * 10),
};

const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.highscore');
const numberElement = document.querySelector('.number');
const userGuessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');

const tryAgainButton = document.querySelector('.again');

tryAgainButton.addEventListener('click', event => {
  gameContext.score = 20;
  gameContext.answer = Number.parseInt(Math.random() * 10);

  numberElement.textContent = '?';
  messageElement.textContent = RESULT.GUESS;
  scoreElement.textContent = gameContext.score;
  userGuessInput.value = '';
});

checkButton.addEventListener('click', event => {
  if (gameContext.score === 0) {
    messageElement.textContent = RESULT.GAME_OVER;
    return;
  }

  const userInput = Number.parseInt(userGuessInput.value);

  if (Number.isNaN(userInput)) {
    alert('Please enter valid number');
    userGuessInput.value = '';
  }

  if (userInput === gameContext.answer) {
    messageElement.textContent = RESULT.CORRECT;
    numberElement.textContent = gameContext.answer;

    gameContext.score += 1;
    gameContext.highScore = Math.max(gameContext.highScore, userInput);

    gameContext.answer = Number.parseInt(Math.random() * 10);
  } else if (userInput < gameContext.answer) {
    messageElement.textContent = RESULT.LOW;
    gameContext.score -= 1;
    numberElement.textContent = '?';
  } else if (userInput > gameContext.answer) {
    messageElement.textContent = RESULT.HIGH;
    gameContext.score -= 1;
    numberElement.textContent = '?';
  }

  console.log({ gameContext });

  scoreElement.textContent = gameContext.score;
  highScoreElement.textContent = gameContext.highScore;
});
