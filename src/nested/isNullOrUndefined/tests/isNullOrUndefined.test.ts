import isNullOrUndefined from "../isNullOrUndefined";

describe("Given isNullOrUndefined", () => {
  describe("When it's passed an undefined value", () => {
    test("Then it should return true", () => {
      const value: any = undefined;
      const expectedResult = true;

      const result = isNullOrUndefined(value);

      expect(result).toBe(expectedResult);
    });
  });
  describe("When it's passed a null value", () => {
    test("Then it should return true", () => {
      const value: any = null;
      const expectedResult = true;

      const result = isNullOrUndefined(value);

      expect(result).toBe(expectedResult);
    });
  });
  describe("When it's passed a falsy value", () => {
    test("Then it should return false", () => {
      const value: number = 0;
      const expectedResult = false;

      const result = isNullOrUndefined(value);

      expect(result).toBe(expectedResult);
    });
  });
  describe("When it's passed a truthy value", () => {
    test("Then it should return false", () => {
      const value: number = 1;
      const expectedResult = false;

      const result = isNullOrUndefined(value);

      expect(result).toBe(expectedResult);
    });
  });
});
