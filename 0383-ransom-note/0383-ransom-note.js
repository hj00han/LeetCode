/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const countMap = {};

    for (let char of magazine) {
        if (countMap[char]) {
            countMap[char] += 1;
        } else {
            countMap[char] = 1;
        }
    }

    // Step 2: Check letters in ransomNote
    for (let char of ransomNote) {
        if (!countMap[char] || countMap[char] === 0) {
            return false; // not enough letters
        }
        countMap[char] -= 1; // use one letter
    }

    return true; // all letters are available
};