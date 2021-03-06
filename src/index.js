import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have let name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const generateQuestions = (params) => {
  console.log('Question: ', params.expression);
  const answer = readlineSync.question('You answer: ');
  if (+answer === +params.answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${params.answer}'`);
  return false;
};
const startGame = (task, questionsParam) => {
  console.log('Welcome to the Brain Games!');
  let name = getName();
  console.log(task);
  for (let i = 0; i < 3; i += 1) {
    let params = questionsParam();
    if (!generateQuestions(params)) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
