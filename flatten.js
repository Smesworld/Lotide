const flatten = function(source) {
  let product = [];

  for (let i = 0; i < source.length; i++) {
    if (Array.isArray(source[i])) {
      product = product.concat(flatten(source[i]));

    } else {
      product.push(source[i]);

    }
  }

  return product;
};

module.exports = flatten;