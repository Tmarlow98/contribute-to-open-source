exports._check = () => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()

    expect(() => calculator._check(40, '2')).to.throw(TypeError);
    expect(() => calculator._check(40, [])).to.throw(TypeError);
    expect(() => calculator._check(40, {})).to.throw(TypeError);
    expect(() => calculator._check('40', 2)).to.throw(TypeError);
    expect(() => calculator._check([], 2)).to.throw(TypeError);
    expect(() => calculator._check({}, 2)).to.throw(TypeError);

    expect(() => calculator.add(40, '2')).to.throw(TypeError);
    expect(() => calculator.add(40, [])).to.throw(TypeError);
    expect(() => calculator.add(40, {})).to.throw(TypeError);
    expect(() => calculator.add('40', 2)).to.throw(TypeError);
    expect(() => calculator.add([], 2)).to.throw(TypeError);
    expect(() => calculator.add({}, 2)).to.throw(TypeError);

    expect(() => calculator.subtract(40, '2')).to.throw(TypeError);
    expect(() => calculator.subtract(40, [])).to.throw(TypeError);
    expect(() => calculator.subtract(40, {})).to.throw(TypeError);
    expect(() => calculator.subtract('40', 2)).to.throw(TypeError);
    expect(() => calculator.subtract([], 2)).to.throw(TypeError);
    expect(() => calculator.subtract({}, 2)).to.throw(TypeError);

    expect(() => calculator.multiply(40, '2')).to.throw(TypeError);
    expect(() => calculator.multiply(40, [])).to.throw(TypeError);
    expect(() => calculator.multiply(40, {})).to.throw(TypeError);
    expect(() => calculator.multiply('40', 2)).to.throw(TypeError);
    expect(() => calculator.multiply([], 2)).to.throw(TypeError);
    expect(() => calculator.multiply({}, 2)).to.throw(TypeError);

    expect(() => calculator.divide(40, '2')).to.throw(TypeError);
    expect(() => calculator.divide(40, [])).to.throw(TypeError);
    expect(() => calculator.divide(40, {})).to.throw(TypeError);
    expect(() => calculator.divide('40', 2)).to.throw(TypeError);
    expect(() => calculator.divide([], 2)).to.throw(TypeError);
    expect(() => calculator.divide({}, 2)).to.throw(TypeError);
};[
]
exports.add = (x, y) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
    return x + y;
};

exports.subtract = (x, y) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
    }
  return x - y;
};

exports.multiply = (x, y) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
    }

  return x * y;
};

exports.divide = (x, y) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
  return x / y;
};

module.exports = exports;
