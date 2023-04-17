const sumToLimit = require("../src/sumToLimit");

describe("sumToLimit", () => {
  test.each`
    limit | expectedSum
    ${1}  | ${1}
  `(
    "returns $expectedSum when the limit is $limit",
    ({ limit, expectedSum }) => {
      expect(sumToLimit(limit)).toBe(expectedSum);
    }
  );
});
