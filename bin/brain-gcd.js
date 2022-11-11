#!/usr/bin/env node
import startGame from '../src/index.js';

function nod(a, b) {
  if (!b) {
    return a;
  }

  return nod(b, a % b);
}

// function generateNod() {
//   const symbols = ['+', '-', '*'];
//   return symbols[Math.floor(Math.random() * symbols.length)];
// };

function generateExpression() {
  const firstNum = Math.floor(Math.random() * 100);
  const secondNum = Math.floor(Math.random() * 100);
  const result = nod(firstNum, secondNum);
  return {
    expression: `${firstNum} ${secondNum}`,
    answer: result,
  };
}

startGame('Find the greatest common divisor of given numbers', generateExpression);
