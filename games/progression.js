// import engine from '../src/index.js';

const getRandomNumber = (min, max) => {
  let result = 0;
  result = Math.floor(Math.random() * (max - min) + min);
  return result;
};

export const gameDescription = 'What is the result of the expression?';

const startNum = getRandomNumber(1, 20);

//3 random progressions
const progression1 = () => {
  const arr = [];
  for (let i = startNum; i < startNum + 20; i += 2) {
    arr.push(i);
  }
  return arr;
};

const progression2 = () => {
  const arr = [];
  for (let i = startNum; i < startNum + 30; i += 3) {
    arr.push(i);
  }
  return arr;
};

const progression3 = () => {
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    arr.push(i * startNum);
  }
  return arr;
};

//progression randomizer
const randomProgression = () => {
  const totalArr = [];
  totalArr.push(progression1(), progression2(), progression3());
  const result = totalArr[getRandomNumber(0, 3)];
  return result;
};

//put random dots to the array and show the missing number
const putDots = (arr) => {
  let replacedNumber = 0;
  let index = getRandomNumber(0, 9);
  replacedNumber = arr[index];
  arr[index] = '..';
  return [arr, replacedNumber];
};

const calculate = () => {
  const [question, correctAnswer] = putDots(randomProgression());
  return [question, String(correctAnswer)];
};

export default calculate;
