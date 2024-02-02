const sequentialDigits = require("./sequential-digits.js");

describe("Sequential Digits", () => {
  it("low = 100, high = 300", () => {
    expect(sequentialDigits(100, 300)).toStrictEqual([123, 234]);
  });

  it("low = 1000, high = 13000", () => {
    expect(sequentialDigits(1000, 13000)).toStrictEqual([
      1234, 2345, 3456, 4567, 5678, 6789, 12345,
    ]);
  });
});
