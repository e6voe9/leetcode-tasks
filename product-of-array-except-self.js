// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const length = nums.length;
  const resultNums = new Array(length);

  // Calculate the prefix products
  resultNums[0] = 1;
  for (let i = 1; i < length; i++) {
    resultNums[i] = resultNums[i - 1] * nums[i - 1];
  }

  // Calculate the suffix products and multiply with prefix products
  let rightProduct = 1;
  for (let i = length - 1; i >= 0; i--) {
    resultNums[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return resultNums;
};
