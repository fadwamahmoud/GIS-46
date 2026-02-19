/**
 * 387. First Unique Character in a String
 * Use a hash table (object) to count character frequencies, then scan again
 * to find the first char with count === 1.
 *
 * Time:  O(n)
 * Space: O(1) for lowercase English letters (or O(k) for general charset)
 */
function firstUniqChar(s) {
  const freq = {}; // hash table: char -> count

  // 1) Count frequencies
  for (const ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // 2) Find first index whose char has frequency 1
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return i;
  }

  return -1;
}
