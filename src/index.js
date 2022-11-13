import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have let name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const generateQuestions = (params) => {
  console.log('Question: ', params.expression);
  const answer = readlineSync.question('You answer: ');
  let checkAnswer = false;
  if (params.answerIsString) {
    checkAnswer = !!(answer === params.answer);
  } else {
    checkAnswer = !!(+answer === +params.answer);
  }
  if (checkAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${params.answer}'`);
  return false;
};
const startGame = (task, questionsParam) => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(task);
  for (let i = 0; i < 3; i += 1) {
    const params = questionsParam();
    if (!generateQuestions(params)) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
