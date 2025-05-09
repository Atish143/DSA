var groupAnagrams = function (strs) {
  const map = {};

  for (let str of strs) {
    // Sort characters to form the key
    const sorted = str.split("").sort().join("");

    // Use the sorted key to group anagrams
    if (!map[sorted]) {
      map[sorted] = [];
    }
    map[sorted].push(str);
  }

  // Return the grouped arrays
  return Object.values(map);
};
