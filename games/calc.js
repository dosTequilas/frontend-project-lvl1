import getRandomNumber from '../utils/randomNumberGenerator.js';
import engine from '../src/index.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const operator = operators[getRandomNumber(0, operators.length - 1)];

const putRandomSign = (num1, num2) => {
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
      result = 'error';
  }
  return result;
};

const calculate = () => {
  const randomNum1 = getRandomNumber(1, 20);
  const randomNum2 = getRandomNumber(1, 20);
  const question = `${randomNum1} ${operator} ${randomNum2}`;
  const correctAnswer = putRandomSign(randomNum1, randomNum2);
  return [question, String(correctAnswer)];
};

export default () => engine(gameDescription, calculate);
