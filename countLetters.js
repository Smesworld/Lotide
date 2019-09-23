const countLetters = function(inputString) {
  const result = {};

  for (const letter of inputString) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }

  return result;
};

module.exports = countLetters;