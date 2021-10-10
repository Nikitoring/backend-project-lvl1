#!/usr/bin/env node
import startGame from '../src/index.js';

const nod = function (a, b) {
  if (!b) {
    return a;
  }

  return nod(b, a % b);
};

// function generateNod() {
//   const symbols = ['+', '-', '*'];
//   return symbols[Math.floor(Math.random() * symbols.length)];
// };

function generateExpression() {
  let firstNum = Math.floor(Math.random() * 100);
  let secondNum = Math.floor(Math.random() * 100);
  let result = nod(firstNum, secondNum);
  return {
    expression: `${firstNum} ${secondNum}`,
    answer: result,
  };
}

startGame('Find the greatest common divisor of given numbers', generateExpression);
