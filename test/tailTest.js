const assertEqual = require('./assertEqual');
const tail = require('../tail');

assertEqual(tail("name"), "ame"); // original array should still have 3 elements!
