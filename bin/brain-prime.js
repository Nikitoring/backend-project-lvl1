#!/usr/bin/env node
import startGame from '../src/index.js';

function checkIsPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

function generateProgression() {
  const number = Math.floor(Math.random() * 100);
  const result = checkIsPrime(number);
  return {
    expression: `${number}`,
    answer: result,
    answerIsString: true,
  };
}

startGame('Answer "yes" if given number is prime. Otherwise answer "no"', generateProgression);
