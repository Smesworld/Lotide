const eqObjects = function(object1, object2) {
  //generate arrays of keys
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  let equivalent = true;

  //test if key arrays are same length
  if (keys1.length !== keys2.length) {
    equivalent = false;
  }

  for (const key in object1) {
    if (!keys2.includes(key)) {
      equivalent = false;
    } else if (object1[key] instanceof Object && object2[key] instanceof Object) {
      equivalent = eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      equivalent = false;
    }
  }

  return equivalent;
};

module.exports = eqObjects;
