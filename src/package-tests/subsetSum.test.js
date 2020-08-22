const expect = require('chai').expect;
const sumService = require('@haensl/subset-sum');

describe('subsetSum()', () => {
  let solver;
  let solution;
  const target = 6;

  describe(`given numbers that add up to ${target}`, () => {
    beforeEach(() => {
      solver = sumService.subsetSum(
        [1, 4, 2, 5, 1, 3, 7, 6, 1, 1, 1],
        target
      );
      solution = solver.next();
    });

    it('returns an array as value', () => {
      expect(Array.isArray(solution.value)).to.be.true;
    });

    it(`returns an array numbers equating to ${target}`, () => {
      expect(
        solution.value.reduce(
          (sum, num) => sum + num, 0)
      ).to.equal(target);
    });

    it('returns the all possible solutions', () => {
      let numSolutions = 1;
      while (!solution.done) {
        numSolutions++;
        solution = solver.next();
      }

      expect(numSolutions).to.equal(38);
    });

    it('is iterable', () => {
      const f = () => {
        for (const solution of solver) { // eslint-disable-line
          // noop
        }
      };

      expect(f).not.to.throw;
    });
  });
});

describe('uniqueSolutions()', () => {
  let solutions;
  let uniqueSolutions;

  beforeEach(() => {
    solutions = [[1, 2, 3], [1, 3, 2], [1, 1, 1], [3, 1, 2]];
    uniqueSolutions = sumService.uniqueSolutions(solutions);
  });

  it('returns only unique solutions', () => {
    expect(uniqueSolutions.length).to.equal(2);
  });

  it('returns only unique solutions', () => {
    expect(uniqueSolutions[0]).to.eql([1, 2, 3]);
  });

  it('returns only unique solutions', () => {
    expect(uniqueSolutions[1]).to.eql([1, 1, 1]);
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
