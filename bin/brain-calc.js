#!/usr/bin/env node
import startGame from '../src/index.js';

function generateSymbol() {
  const symbols = ['+', '-', '*'];
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generateExpression() {
  const firstNum = Math.floor(Math.random() * 100);
  const secondNum = Math.floor(Math.random() * 100);
  const symbol = generateSymbol();
  let result = firstNum * secondNum;
  if (symbol === '+') {
    result = firstNum + secondNum;
  }
  if (symbol === '-') {
    result = firstNum - secondNum;
  }
  return {
    expression: `${firstNum} ${symbol} ${secondNum}`,
    answer: result,
  };
}

startGame('What is the result of the expression?', generateExpression);
