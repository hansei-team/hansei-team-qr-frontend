export const getRandomNumber = (_min: number, _max: number) => {
  const min = Math.ceil(_min);
  const max = Math.floor(_max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
