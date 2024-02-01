import { generateRandomNumbers } from "./generateRandomNumbers";

const generateRandomLetters = (min = 1, max = 20) => {
  const mask = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  let data = "";
  const randomLength = generateRandomNumbers(min, max);
  // very simple random string generator for now
  for (let i = 0; i <= randomLength; i++) {
    data += mask[Math.floor(Math.random() * mask.length)];
  }
  return data;
};

export { generateRandomLetters };
