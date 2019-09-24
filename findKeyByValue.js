const findKeyByValue = function(inputObject, searchValue) {
  for (const item in inputObject) {
    if (inputObject[item] === searchValue) {
      return item;
    }
  }

  return undefined;
};

module.exports = findKeyByValue;
