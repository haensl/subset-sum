# Subset sum

[![NPM](https://nodei.co/npm/@haensl%2Fsubset-sum.png?downloads=true)](https://nodei.co/npm/@haensl%2Fsubset-sum/)

[![npm version](https://badge.fury.io/js/@haensl%2Fsubset-sum.svg)](http://badge.fury.io/js/@haensl%2Fsubset-sum)
[![Build Status](https://travis-ci.org/haensl/subset-sum.svg?branch=master)](https://travis-ci.org/haensl/subset-sum)

Node.js module to compute solutions to the [Coin changing problem](http://rosettacode.org/wiki/Count_the_coins), i.e. find combinations of integers from a given set of available integers that sum up to a desired result.

## Quick start

1. Install the library

via `npm`

```bash
npm i -S @haensl/subset-sum
```

via `yarn`

```bash
yarn add @haensl/subset-sum
```

2. Use the library in your code


```javascript
const sumService = require('subset-sum');
const numbers = [1, 4, 2, 5, 1, 3];
const target = 6;
const solver = sumService.subsetSum(numbers, target);
for (let solution of solver) {
  console.log(solution);
}
```

## API

`subsetSum(numbers, target) => Generator`

Returns a generator that yields arrays of integers from `numbers` that add up to `target`.

`uniqueSolutions(solutions) => Array`

Filters `solutions` for unique solutions.

`isSameSolution(solutionA, solutionB) => boolean`

Compares to solutions and determines if they are equal, i.e. contain the same integers. E.g. `[1, 1, 3, 1]` and `[1, 3, 1, 1]` are considered equal.


## [Changelog](CHANGELOG.md)

## [Licence](LICENSE)

