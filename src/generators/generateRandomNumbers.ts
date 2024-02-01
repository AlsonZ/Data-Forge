const generateRandomNumbers = (min = 1, max = 999999999999) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandomMobileNumbers = () => {
  // To replace later with actual numbers with area codes and such?
  // add specific countries as a option, with local numbers without country codes and such
  // for now, a 10 digit number
  const minNumber = 1000000000;
  const maxNumber = 9999999999;
  return generateRandomNumbers(minNumber, maxNumber);
};

export { generateRandomNumbers, generateRandomMobileNumbers };
