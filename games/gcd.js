import getRandomNumber from '../utils/randomNumberGenerator.js';
import engine from '../src/index.js';
// отдельная функция, которая просто находит резульат,
// calculate просто генерирует два рандомных числа, внутри себя запускает новую чистую функцию и
// вставить рекурсивный алгоритм
// в каждой игре - чистую функцию
// выделить функцию getRa в отдельный модуль utils - как cli
// записать аскинему с запуском через bin

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const calculate = () => {
  const randomNum1 = getRandomNumber(1, 20);
  const randomNum2 = getRandomNumber(1, 20);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = gcd(randomNum1, randomNum2);

  return [question, String(correctAnswer)];
};

export default engine(gameDescription, calculate);
