/**
 * 347. Top K Frequent Elements
 * Use a hash table (Map) to count frequencies, then bucket sort to extract top k.
 *
 * Time:  O(n)
 * Space: O(n)
 */
function topKFrequent(nums, k) {
  // 1) Frequency table (hash table): number -> count
  const freq = new Map();
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  // 2) Buckets: buckets[count] = all numbers that appear exactly 'count' times
  const buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, count] of freq.entries()) {
    buckets[count].push(num);
  }

  // 3) Collect from highest frequency down until we have k elements
  const result = [];
  for (
    let count = buckets.length - 1;
    count >= 1 && result.length < k;
    count--
  ) {
    for (const num of buckets[count]) {
      result.push(num);
      if (result.length === k) break;
    }
  }

  return result;
}
