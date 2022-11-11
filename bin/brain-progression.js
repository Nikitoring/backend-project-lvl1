#!/usr/bin/env node
import startGame from '../src/index.js';

function progression() {
  const firstNum = Math.floor(Math.random() * 100);
  const diff = Math.floor(1 + Math.random() * 10);
  const lengthLine = Math.floor(5 + Math.random() * 6);
  const progressionLine = [firstNum];
  for (let index = 0; index < lengthLine; index += 1) {
    const nextNum = progressionLine[index] + diff;
    progressionLine.push(nextNum);
  }
  return progressionLine;
}

function generateProgression() {
  const progressionLine = progression();
  const hiddenIndex = Math.floor(0 + Math.random() * progressionLine.length);
  const result = progressionLine[hiddenIndex];
  const progressionString = progressionLine.map((elem) => elem);
  progressionString[hiddenIndex] = '..';
  return {
    expression: `${progressionString.join(' ')}`,
    answer: result
  };
}

startGame('What number is missing in the progression?', generateProgression);
