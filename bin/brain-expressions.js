#!/usr/bin/env node
import startGame from '../src/index.js';

function generateSymbol() {
  const symbols = ['+', '-', '*'];
  return symbols[Math.floor(Math.random() * symbols.length)];
};

function generateExpression() {
  let firstNum =  Math.floor(Math.random() * 100);
  let secondNum = Math.floor(Math.random() * 100);
  let symbol = generateSymbol();
  return {
    expression: `${firstNum} ${symbol} ${secondNum}`,
    answer: symbol === '+' ? firstNum + secondNum : symbol === '-' ? firstNum - secondNum : firstNum * secondNum,
  };
}

startGame('What is the result of the expression?', generateExpression);
