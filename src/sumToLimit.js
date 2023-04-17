const sumToLimit = (limit) => {
  let sum = 0;
  for (let num = 1; num <= limit; num++) {
    sum += num;
  }
  return sum;
};

module.exports = sumToLimit;
