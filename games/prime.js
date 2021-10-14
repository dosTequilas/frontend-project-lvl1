import getRandomNumber from '../utils/randomNumberGenerator.js';
import engine from '../src/index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const divisors = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  let answer = 'yes';
  if (divisors.length > 2) {
    answer = 'no';
  }
  return answer;
};

const calculate = () => {
  const question = getRandomNumber(1, 20);
  const correctAnswer = isPrime(question);
  return [question, correctAnswer];
};

export default engine(gameDescription, calculate);
