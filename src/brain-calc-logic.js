import readlineSync from 'readline-sync';

export default () => {
  const operators = ['+', '-', '*'];

  const calculate = (num1, num2, operator) => {
    let result = 0;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        // eslint-disable-next-line no-unused-expressions
        'stop';
    }
    return String(result);
  };

  console.log('Welcome to the brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    const randomNum1 = Math.floor(Math.random() * 100);
    const randomNum2 = Math.floor(Math.random() * 100);
    const randomIndex = Math.floor(Math.random() * (3 - 0) + 0);
    const randomExpression = `${randomNum1} ${operators[randomIndex]} ${randomNum2}`;

    console.log(`Question: ${randomExpression}`);
    const answer = readlineSync.question('Your answer:');

    if (answer === calculate(randomNum1, randomNum2, operators[randomIndex])) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${calculate()}.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}!`);
};
