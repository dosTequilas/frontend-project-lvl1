const getRandomNumber = (min, max) => {
  let result = 0;
  result = Math.floor(Math.random() * (max - min) + min);
  return result;
};
export default getRandomNumber;
