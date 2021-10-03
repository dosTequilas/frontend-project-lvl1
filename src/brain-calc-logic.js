import readlineSync from 'readline-sync';

export default () => {
  const randomNum1 = Math.floor(Math.random() * 100);
  const randomNum2 = Math.floor(Math.random() * 100);
  const operatorsArr = ['+', '-', '*'];
  let randomIndex = Math.floor(Math.random() * (3 - 0) + 0);
  const randomExpression = `${randomNum1} ${operatorsArr[randomIndex]} ${randomNum2}`;
  const correctAnswer = () => {
    let result = 0;
    switch (operatorsArr[randomIndex]) {
      case '+':
        result = randomNum1 + randomNum2;
        break;
      case '-':
        result = randomNum1 - randomNum2;
        break;
      case '*':
        result = randomNum1 * randomNum2;
        break;
      default:
        'error';
    }
    return result;
  };

  console.log('Welcome to the brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    console.log(`Question: ${randomExpression}`);
    const answer = Number(readlineSync.question('Your answer:'));

    if (answer === correctAnswer()) {
      console.log('Correct!');
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${correctAnswer()}.`
      );
      return console.log(`Let's try again, ${name}!`);
    }
  }

  return console.log(`Congratulaions, ${name}!`);
};
