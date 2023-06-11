/**
 * @param {string} s
 * @return {number}
 */

const romanNumbersArr = [
  ["CM", 900],
  ["M", 1000],
  ["CD", 400],
  ["D", 500],
  ["XC", 90],
  ["XL", 40],
  ["C", 100],
  ["L", 50],
  ["IX", 9],
  ["X", 10],
  ["IV", 4],
  ["V", 5],
  ["I", 1],
];

var romanToInt = function (s) {
  romanNumbersArr.forEach(([key, value]) => {
    s = s.replaceAll(key, "-" + value);
  });

  return s.split("-").reduce((a, b) => +a + +b);
};

console.log(romanToInt("MCMXCIV"));
