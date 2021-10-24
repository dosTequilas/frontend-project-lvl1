import getRandomNumber from '../utils/randomNumberGenerator.js';
import engine from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const createRound = () => {
  const randomNum1 = getRandomNumber(2, 20);
  const randomNum2 = getRandomNumber(2, 20);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = getGcd(randomNum1, randomNum2);

  return [question, String(correctAnswer)];
};

export default () => engine(gameDescription, createRound);
