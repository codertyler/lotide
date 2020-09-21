const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
const cd3 = { d: ["2", 3], c: "1" };

assertEqual(eqArrays(cd.d, cd2.d), false);
assertEqual(eqArrays(cd.d, cd3.d), true);

