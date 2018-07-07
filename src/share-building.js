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

  if (sum === 0) {
    return numbers.map(value => value.toFixed(3));
  }

  if (sum === Infinity) {
    throw new Error(`Sum overflowing`);
  }

  const divider = sum / 100;
  if (divider == 0) {
    throw new Error(`Сan not divide by 0`);
  }

  const result = [];
  for (let value of numbers) {
    result.push((value / divider).toFixed(3));
  }

  return result;
};

module.exports = compute;
