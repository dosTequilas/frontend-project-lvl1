import readlineSync from 'readline-sync';

const attemptsAmount = 3;

const engine = (gameDescription, createRound) => {
  console.log('Welcome to the brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(gameDescription);

  for (let i = 1; i <= attemptsAmount; i += 1) {
    const [question, correctAnswer] = createRound();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default engine;
