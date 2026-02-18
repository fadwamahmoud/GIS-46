/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  quicksort(nums, 0, nums.length - 1);
};

function quicksort(nums, start, end) {
  if (start >= end) return;
  let pivotIndex = Math.floor((start + end) / 2);
  let pivot = nums[pivotIndex];

  let lt = start;
  let gt = end;
  let i = start;

  // swap for pivot
  while (i <= gt) {
    if (nums[i] > pivot) {
      swapIWithJ(nums, gt, i);
      gt--;
    } else if (nums[i] < pivot) {
      swapIWithJ(nums, lt, i);
      lt++;
      i++;
    } else {
      i++;
    }
  }

  // recursively sort all parts
  quicksort(nums, start, lt - 1);
  quicksort(nums, gt + 1, end);
}

// swaps iin place
const swapIWithJ = (arr, i, j) => {
  let tmp;

  tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};
