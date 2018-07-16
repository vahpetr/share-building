// @ts-check

const MAX_LENGTH = 7e6;

const compute = array => {
  if (array === null) {
    throw new Error(`Not support nullable array`);
  }

  if (array.length > MAX_LENGTH) {
    throw new Error(`Array length can't greater than ${MAX_LENGTH}`);
  }

  if (array.length === 0) {
    return [];
  }

  let sum = 0;
  const numbers = [];
  for (let text of array) {
    const value = parseFloat(text);
    numbers.push(value);
    sum += value;
  }

  if (sum === Infinity) {
    throw new Error(`Sum overflowing`);
  }

  if (sum === 0) {
    return numbers.map(value => value.toFixed(3));
  }

  const divider = sum / 100;
  const results = [];
  let remainder = 100;
  for (let value of numbers) {
    const result = value / divider;
    results.push(result.toFixed(3));
    remainder -= result;
  }

  if(remainder != 0) {
    results.push(Math.abs(remainder));
  }

  return results;
};

module.exports = compute;
