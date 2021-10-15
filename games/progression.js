import getRandomNumber from '../utils/randomNumberGenerator.js';
import engine from '../src/index.js';

const gameDescription = 'What is the result of the expression?';

const randomProgression = (step, startNum, length) => {
  const result = [];
  for (let i = startNum; i < length; i += step) {
    result.push(i);
  }
  return result;
};

const calculate = () => {
  const length = getRandomNumber(30, 50);
  const step = getRandomNumber(2, 5);
  const startNum = getRandomNumber(1, 10);
  const index = getRandomNumber(0, 9);

  const array = randomProgression(step, startNum, length);
  const replacedNumber = array[index];
  array[index] = '..';
  const correctAnswer = String(replacedNumber);
  return [array, correctAnswer];
};

export default engine(gameDescription, calculate);
