// https://leetcode.com/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const stack = [{ left: 0, right: arr.length - 1 }];

  while (stack.length > 0) {
    const { left, right } = stack.pop();
    const pivotIndex = partition(arr, left, right);

    if (pivotIndex - 1 > left) {
      stack.push({ left, right: pivotIndex - 1 });
    }

    if (pivotIndex + 1 < right) {
      stack.push({ left: pivotIndex + 1, right });
    }
  }

  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, right);
  return i + 1;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

var sortColors = function (nums) {
  quickSort(nums);
};

sortColors([2, 0, 2, 1, 1, 0]);
