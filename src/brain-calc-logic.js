import readlineSync from 'readline-sync';

export default () => {
  const randomNum1 = Math.floor(Math.random() * 100);
  const randomNum2 = Math.floor(Math.random() * 100);
  let randomIndex = Math.floor(Math.random() * (3 - 0) + 0);

  const randomExpression = () => {
    let result = 0;
    switch (randomIndex) {
      case 0:
        result = randomNum1 + randomNum2;
        break;
      case 1:
        result = randomNum1 - randomNum2;
        break;
      case 2:
        result = randomNum1 * randomNum2;
        break;
    }
    return result;
  };

  console.log('Welcome to the brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomExpression}`);
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
