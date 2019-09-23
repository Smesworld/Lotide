const tail = function(array) {
  return Array.from(array).splice(1);
};

module.exports = tail;
