const rentSplitter = require("../rentSplitter");

describe("Rent Splitter", () => {
  test("should return the input divided into uneven thirds where the first receives 100 more than second and third", () => {
    const input = 1500;
    const output = [600, 450, 450];

    expect(rentSplitter(input)).toEqual(output);
  });
});
