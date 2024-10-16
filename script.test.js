import StringCalculator from "./script";

describe("StringCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  it("should return the number itself when input is a single number", () => {
    expect(calculator.add("5")).toBe(5);
  });

  it("should return the sum of two comma-separated numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  it("should return the sum of multiple numbers", () => {
    expect(calculator.add("1,2,3")).toBe(6);
  });

  it("should handle newlines as delimiters along with commas", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  it("should support a custom delimiter specified by // at the beginning", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  it("should throw an exception if negative numbers are provided", () => {
    expect(() => calculator.add("1,-2,3")).toThrow(
      "Negative numbers not allowed: -2"
    );
  });

  it("should throw an exception if multiple negative numbers are provided", () => {
    expect(() => calculator.add("1,-2,-3")).toThrow(
      "Negative numbers not allowed: -2, -3"
    );
  });

  it("should handle a custom delimiter of any length", () => {
    expect(calculator.add("//[***]\n1***2***3")).toBe(6);
  });
});
