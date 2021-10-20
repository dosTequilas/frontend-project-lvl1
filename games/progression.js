import getRandomNumber from '../utils/randomNumberGenerator.js';
import engine from '../src/index.js';

const gameDescription = 'What is the result of the expression?';

const randomProgression = (startNum, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(startNum + i * step);
  }
  return result;
};

const createRound = () => {
  const progressionLength = getRandomNumber(10, 20);
  const step = getRandomNumber(2, 5);
  const startNum = getRandomNumber(1, 10);
  const hiddenIndex = getRandomNumber(0, 9);
  const progression = randomProgression(startNum, step, progressionLength);
  const replacedNumber = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  const progressionString = progression.join(' ');
  const correctAnswer = String(replacedNumber);
  return [progressionString, correctAnswer];
};

export default () => engine(gameDescription, createRound);
