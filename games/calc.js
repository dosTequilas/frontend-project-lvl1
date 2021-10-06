import engine from '../src/index.js';

const getRandomNumber = (min, max) => {
  let result = 0;
  result = Math.floor(Math.random() * (max - min) + min);
  return result;
};

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const levelGenerator = () => {
  const randomNum1 = getRandomNumber(1, 20);
  const randomNum2 = getRandomNumber(1, 20);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${randomNum1} ${operator} ${randomNum2}`;
  let result = 0;

  switch (operator) {
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
      result = 'error';
  }
  return [question, String(result)];
};
export default () => engine(gameDescription, levelGenerator);
