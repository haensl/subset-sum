const numSort = (a, b) => {
  if (a < b) {
    return -1;
  } else if (b < a) {
    return 1;
  }

  return 0;
};

const isSameSolution = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  const _a = a.slice().sort(numSort);
  const _b = b.slice().sort(numSort);

  for (let i = 0; i < _a.length; i++) {
    if (_a[i] !== _b[i]) {
      return false;
    }
  }

  return true;
};

const uniqueSolutions = (solutions) =>
  solutions
    .reduce((uniqueSolutions, solution) => {
      if (!uniqueSolutions.find(isSameSolution.bind(null, solution))) {
        uniqueSolutions.push(solution);
      }

      return uniqueSolutions;
    }, []);

const sum = (numbers) =>
  numbers.reduce((sum, number) => sum + number, 0);

const subsetSum = function*(numbers, target, partial = []) {
  const s = sum(partial);
  if (s === target) {
    yield partial;
  }

  if (s >= target) {
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    yield* subsetSum(
      numbers.slice(i + 1),
      target,
      [...partial, numbers[i]]
    );
  }
};

module.exports = {
  isSameSolution,
  uniqueSolutions,
  subsetSum
};
