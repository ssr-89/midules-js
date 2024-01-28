// import getValue from "../modules/get_value.js";
// import mapArray from "../modules/map.js";

import { map as mapArray, getValue, number } from '../modules/helpers_array.js';

const superHero = [
  { id: 12345, hero: 'batman', power: 'money' },
  { id: 54321, hero: 'aquaman', power: 'fishpower' }
];

console.log(getValue(superHero, 'hero'));
console.log(getValue(superHero, 'id'));
console.log(mapArray(superHero, 'hero'));
console.log(number);
