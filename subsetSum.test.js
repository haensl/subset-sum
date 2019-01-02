const expect = require('chai').expect;
const sumService = require('./');

describe('subsetSum()', () => {
  let solution;
  const target = 6;

  describe(`given numbers that add up to ${target}`, () => {
    beforeEach(() => {
      solution = sumService.subsetSum(
        [1, 4, 2, 5, 1, 3, 7, 6, 1, 1, 1],
        target
      );
    });

    it('returns an array', () => {
      expect(Array.isArray(solution)).to.be.true;
    });

    it('returns an array of arrays', () => {
      expect(
        solution.reduce(
          (isArray, result) => isArray && Array.isArray(result)
          , true
        )
      ).to.be.true;
    });

    it(`returns an array of arrays of numbers equating to ${target}`, () => {
      expect(
        solution.reduce(
          (isTarget, solution) =>
            isTarget
            && solution.reduce((sum, num) => sum + num, 0) === target,
          true
        )
      ).to.be.true;
    });

    it('returns the all possible unique solutions', () => {
      expect(solution.length).to.equal(7);
    });
  });
});

describe('isSameSolution()', () => {
  let a;
  let b;

  describe('given equal solutions', () => {
    beforeEach(() => {
      a = [1, 1, 2];
      b = [1, 2, 1];
    });

    it('returns true', () => {
      expect(sumService.isSameSolution(a, b)).to.be.true;
    });
  });

  describe('given non-equal solutions', () => {
    beforeEach(() => {
      a = [1, 1, 2];
      b = [1, 2, 2];
    });

    it('returns false', () => {
      expect(sumService.isSameSolution(a, b)).to.be.false;
    });
  });
});
