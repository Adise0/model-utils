import getNestedKeys from "../getNestedKeys";

describe("Given getNestedKeys", () => {
  describe("When it's passed a shallow object", () => {
    test("Then it should return it's keys", () => {
      const object = {
        foo: "1",
        bar: 2,
      };
      const expectedResult = ["foo", "bar"];

      const keys = getNestedKeys(object);

      expect(keys).toEqual(expectedResult);
    });
  });

  describe("When it's passed a deep object", () => {
    test("Then it should return it's keys", () => {
      const object = {
        foo: "1",
        bar: 2,
        text: {
          hello: "world",
        },
      };
      const expectedResult = ["foo", "bar", "text.hello"];

      const keys = getNestedKeys(object);

      expect(keys).toEqual(expectedResult);
    });
  });
});
