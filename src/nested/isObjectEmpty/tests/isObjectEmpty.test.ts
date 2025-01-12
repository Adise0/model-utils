import isObjectEmpty from "../isObjectEmpty";

describe("Given isObjectEmpty", () => {
  describe("When it's passed an empty object", () => {
    test("Then it should return true", () => {
      const object = {};
      const expectedResult = true;

      const result = isObjectEmpty(object);

      expect(result).toBe(expectedResult);
    });
  });
  describe("When it's passed an object with properties", () => {
    test("Then it should return false", () => {
      const object = {
        hello: "World!",
      };
      const expectedResult = false;

      const result = isObjectEmpty(object);

      expect(result).toBe(expectedResult);
    });
  });
});
