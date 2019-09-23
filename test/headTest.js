const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([5,6,7]), 5);
assertEqual(head([8,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Winning");
assertEqual(head([]), undefined);
assertEqual(head([5]), 5);