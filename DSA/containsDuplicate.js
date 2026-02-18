/**
 * 217. Contains Duplicate
 * Using a hash table implemented with an object
 *
 * Time: O(n)
 * Space: O(n)
 */
function containsDuplicate(nums) {
  const table = {}; // our hash table

  for (const num of nums) {
    // if key already exists → duplicate
    if (table[num] === true) {
      return true;
    }

    // otherwise store it in the hash table
    table[num] = true;
  }

  return false;
}
