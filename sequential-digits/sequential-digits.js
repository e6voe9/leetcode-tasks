/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
const createSubMax = (len) => {
  let str = "1";
  for (let b = 1; b <= len; ++b) {
    str += "0";
  }

  return Number(str);
};

const createNumberMadeOfOnes = (len) => {
  let str = "";
  for (let b = 1; b <= len; ++b) {
    str += "1";
  }

  return Number(str);
};

const createFirstSequentialBasedOnLength = (len) => {
  let str = "";
  for (let b = 1; b <= len; ++b) {
    str += String(b);
  }

  return Number(str);
};

const checkIfSequential = (num) => {
  const stringifiedNum = num.toString();

  for (let i = 1; i < stringifiedNum.length; ++i) {
    const shouldStop =
      Number(stringifiedNum[i]) - Number(stringifiedNum[i - 1]) !== 1;

    if (shouldStop) return false;
  }

  return true;
};

var sequentialDigits = function (low, high) {
  const result = [];
  const numLowLength = low.toString().length;
  const numHighLength = high.toString().length;

  const tryToAddIntoResults = (num) => {
    if (num >= low && num <= high) {
      result.push(num);
    }
  };

  for (
    let currentLength = numLowLength;
    currentLength <= numHighLength;
    ++currentLength
  ) {
    const cHigh = createSubMax(currentLength);

    const min = createFirstSequentialBasedOnLength(currentLength);

    tryToAddIntoResults(min);

    const addNumber = createNumberMadeOfOnes(currentLength);

    for (let i = min; i < cHigh; i += addNumber) {
      const newNum = i + addNumber;

      if (!checkIfSequential(newNum)) continue;

      tryToAddIntoResults(newNum);
    }
  }

  return result;
};

module.exports = sequentialDigits;
