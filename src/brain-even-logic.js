import readlineSync from 'readline-sync';

export default () => {
  const getRandomNumber = () => Math.floor(Math.random() * 100);
  console.log('Welcome to the brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer:');
    if (randomNumber % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.`);
        return console.log(`Let's try again, ${name}!`);
      }
    }
    if (randomNumber % 2 !== 0) {
      if (answer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.)`);
        return console.log(`Let's try again, ${name}!`);
      }
    }
  }

  return console.log(`Congratulaions, ${name}!`);
};
