import getRandomNumber from '../utils/randomNumberGenerator.js';
import engine from '../src/index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const createRound = () => {
  const question = getRandomNumber(1, 99);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => engine(gameDescription, createRound);
