const assertArrayEqual = require('../assertArrayEqual');
const assertEqual = require('./assertEqual');
const middle = require('../middle');

assertEqual(assertArrayEqual(middle([1,2,3,4]), [2,3]), true) ;
