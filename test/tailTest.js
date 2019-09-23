const assertEqual = require('../assertEqual');
const tail = require('../tail');

const numbers = [1,2,3];
tail(numbers);
assertEqual(numbers.length, 3);

const empty = [];
assertEqual(empty.length, 0);

const single = ["food"];
assertEqual(single.length, 1);
