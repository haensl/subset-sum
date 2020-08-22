const sumService = require('@haensl/subset-sum');

const numbers = [1, 4, 2, 5, 1, 3];
const target = 6;
const solver = sumService.subsetSum(numbers, target);
for (const solution of solver) {
  console.log(solution);
}
