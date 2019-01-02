# Subset sum

Node.js module to compute solutions to the [Coin changing problem](http://rosettacode.org/wiki/Count_the_coins), i.e. find combinations of integers from a given set of available integers that sum up to a desired result.

## Quick start

1. Install the library

via `npm`

```bash
npm i -S subset-sum
```

via `yarn`

```bash
yarn add subset-sum
```

2. Use the library in your code


```javascript
const sumService = require('subset-sum');
const numbers = [1, 4, 2, 5, 1, 3];
const target = 6;
const solutions = sumService.subsetSum(numbers, target);
console.log(solutions);
// Output:
// [ [ 1, 4, 1 ], [ 1, 2, 3 ], [ 1, 5 ], [ 4, 2 ] ]
```

### The library filters duplicate solutions!

## [Changelog](CHANGELOG.md)

## [Licence](LICENSE)

