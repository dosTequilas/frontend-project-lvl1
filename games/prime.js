import engine from '../src/index.js';

const getRandomNumber = (min, max) => {
  let result = 0;
  result = Math.floor(Math.random() * (max - min) + min);
  return result;
};

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const calculate = () => {
  const num = getRandomNumber(1, 20);
  const divisors = [];
  const question = String(num);
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  let answer = 'yes';
  if (divisors.length > 2) {
    answer = 'no';
  }
  return [question, answer];
};
export default calculate;
