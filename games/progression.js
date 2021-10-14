import getRandomNumber from '../utils/randomNumberGenerator.js';
import engine from '../src/index.js';

const gameDescription = 'What is the result of the expression?';

const randomProgression = () => {
  const arr = [];
  const step = getRandomNumber(2, 5);
  const startNum = getRandomNumber(1, 10);

  for (let i = startNum; i < 50; i += step) {
    arr.push(i);
  }
  return arr;
};

const putDots = (arr) => {
  const index = getRandomNumber(0, 9);
  const array = arr;
  const replacedNumber = array[index];
  array[index] = '..';
  const question = array;
  const correctAnswer = String(replacedNumber);
  return [question, correctAnswer];
};

const calculate = () => {
  const result = putDots(randomProgression());
  return result;
};

export default engine(gameDescription, calculate);
