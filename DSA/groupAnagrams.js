function groupAnagrams(strs) {
  const table = {}; // hash table: key -> list of words

  for (const word of strs) {
    // create signature key
    const key = word.split("").sort().join("");

    if (!table[key]) {
      table[key] = [];
    }

    table[key].push(word);
  }

  return Object.values(table);
}
