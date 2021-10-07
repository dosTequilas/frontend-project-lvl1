import engine from '../src/index.js';

const getRandomNumber = (min, max) => {
  let result = 0;
  result = Math.floor(Math.random() * (max - min) + min);
  return result;
};

export const gameDescription = 'Find the greatest common divisor of given numbers.';

const calculate = () => {
  const randomNum1 = getRandomNumber(1, 20);
  const randomNum2 = getRandomNumber(1, 20);
  const question = `${randomNum1} ${randomNum2}`;

  const divisorsNum1 = [];
  const divisorsNum2 = [];

  for (let i = 0; i <= randomNum1; i += 1) {
    if (randomNum1 % i === 0) {
      divisorsNum1.push(i);
    }
    if (randomNum2 % i === 0) {
      divisorsNum2.push(i);
    }
  }

  const intersection = divisorsNum1.filter((value) => divisorsNum2.includes(value));

  const biggest = intersection.pop();

  return [question, String(biggest)];
};

export default calculate;
