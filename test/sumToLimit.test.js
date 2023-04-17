const sumToLimit = require("../src/sumToLimit");

describe("sumToLimit", () => {
  test.each`
    limit  | expectedSum
    ${1}   | ${1}
    ${2}   | ${3}
    ${8}   | ${36}
    ${100} | ${5050}
    ${101} | ${5151}
  `(
    "returns $expectedSum when the limit is $limit",
    ({ limit, expectedSum }) => {
      expect(sumToLimit(limit)).toBe(expectedSum);
    }
  );
});
