import readlineSync from 'readline-sync';

function generateRandom() {
  return Math.floor(Math.random() * 100);
}

function playEvenGame() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = generateRandom();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('You answer: ');
    if (number % 2 === 0) {
      if (answer === 'yes') { console.log('Correct!'); } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }
    if (number % 2 !== 0) {
      if (answer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export default playEvenGame;
