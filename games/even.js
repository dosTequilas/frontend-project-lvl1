import engine from '../src/index.js';

const getRandomNumber = (min, max) => {
  let result = 0;
  result = Math.floor(Math.random() * (max - min) + min);
  return result;
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const levelGenerator = () => {
  let result;
  const question = getRandomNumber(1, 20);
  if (question % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return [question, String(result)];
};

export default () => engine(gameDescription, levelGenerator);
