# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @aedodge/lotide`

**Require it:**

`const _ = require('@aedodge/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description

* `assertArraysEqual(array1, array2)`: Compairs two arrays and outputs a true or false message based on that comparison
* `assertEqual(data1, data2)`: Compairs primative data-types and outputs a true or false message based on that comparison
* `assertObjectsEqual(object1, object2)`: Compairs two objects and outputs a true or false message based on that comparison
* `countLetters(string1)`: returns an object with letters as keys from the string and values of letter counts
* `countOnly(array, object)`: returns an object with primatives as keys from the object and values counting those primatives in the array
* `eqArrays(array1, array2)`: returns true or false based on the comparison of the arrays
* `eqObjects(object1, object2)`: Returns true or false based on the comparison of the two objects
* `findKey(object, function)`: Returns the key of an object found by the callback function
* `findKeyByValue(object, value)`: Returns the key in the object which coresponds to the value
* `flatten(array)`: Returns a single depth array when given a nested array
* `head(array)`: returns the value of the first location in the array
* `letterPositions(string)`: returns an object with letters as keys and values as an array of locations
* `map(array, function)`: returns a new array after applying the function to each element of the input array
* `middle(array)`: returns sub-array coresponding to the middle of input array
* `tail(array)`: returns new array without the first value of input array
* `takeUntil(array, function)`: returns sub-array of input array until function evaluates true
* `without()`:
