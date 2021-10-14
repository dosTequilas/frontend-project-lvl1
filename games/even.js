import getRandomNumber from '../utils/randomNumberGenerator.js';
import engine from '../src/index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  let result;
  result = 'no';
  if (num % 2 === 0) {
    result = 'yes';
  }
  return result;
};

const calculate = () => {
  const question = getRandomNumber(1, 99);
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

export default engine(gameDescription, calculate);
