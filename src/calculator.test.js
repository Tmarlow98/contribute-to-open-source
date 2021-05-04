/* eslint-disable no-unused-expressions */
const calculator = require('./calculator');

describe('_check', () => {
  beforeEach(() => {
    sinon.spy(calculator, '_check');
  });

  afterEach(() => {
    calculator._check.restore();
  });

  it('should throw a TypeError if arguments are not numbers', () => {
      exports._check;
  });

    it('should be called once in "add"', () => {
    exports._check;
  });

    it('should be called once in "subtract"', () => {
        exports._check;
  });

    it('should be called once in "multiply"', () => {
        exports._check;
  });

    it('should be called once in "divide"', () => {
        exports._check;
  });
});

describe('add', () => {
  it('should throw a TypeError if arguments are not numbers', () => {
      exports._check;
  });

  it('should add two positive numbers', () => {
    expect(calculator.add(40, 2)).to.equal(42);
  });

  it('should add two negative numbers', () => {
    expect(calculator.add(-40, -2)).to.equal(-42);
  });

  it('should add one positive number and one negative number', () => {
    expect(calculator.add(44, -2)).to.equal(42);
  });
});

describe('subtract', () => {
    it('should throw a TypeError if arguments are not numbers', () => {
        exports._check;
  });

  it('should subtract two positive numbers', () => {
    expect(calculator.subtract(44, 2)).to.equal(42);
  });

  it('should subtract two negative numbers', () => {
    expect(calculator.subtract(-44, -2)).to.equal(-42);
  });

  it('should subtract one positive number and one negative number', () => {
    expect(calculator.subtract(40, -2)).to.equal(42);
  });
});

describe('multiply', () => {
  it('should throw a TypeError if arguments are not numbers', () => {
      exports._check;
  });

  it('should multiply two positive numbers', () => {
    expect(calculator.multiply(6, 7)).to.equal(42);
  });

  it('should multiply two negative numbers', () => {
    expect(calculator.multiply(-6, -7)).to.equal(42);
  });

  it('should multiply one positive number and one negative number', () => {
    expect(calculator.multiply(6, -7)).to.equal(-42);
  });
});

describe('divide', () => {
    it('should throw a TypeError if arguments are not numbers', () => {
     exports._check;
  });

  it('should divide two positive numbers', () => {
    expect(calculator.divide(84, 2)).to.equal(42);
  });

  it('should divide two negative numbers', () => {
    expect(calculator.divide(-84, -2)).to.equal(42);
  });

  it('should divide one positive number and one negative number', () => {
    expect(calculator.divide(84, -2)).to.equal(-42);
  });
});
