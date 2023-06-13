/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let numbersCount = 0;

  for (let i = 0; i < grid.length; i++) {
    const curr = grid[i];
    for (let j = 0; j < curr.length; j++) {
      if (curr[j] < 0) numbersCount++;
    }
  }

  return numbersCount;
};
