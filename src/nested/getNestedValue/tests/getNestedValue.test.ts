import NestedKeyOf from "../../NestedKeyOf";
import getNestedValue from "../getNestedValue";

describe("Given GetVestedValue", () => {
  describe("When it's passed a valid nested path", () => {
    test("Then it should return the correct value", () => {
      const object = {
        foo: "bar",
        bar: {
          hello: "world",
          a: 2,
        },
      };
      const path: NestedKeyOf<typeof object> = "bar.hello";
      const expectedResult = "world";

      const value = getNestedValue(path, object);

      expect(value).toBe(expectedResult);
    });
  });
  describe("When it's passed a valid non-nested path", () => {
    test("Then it should return the correct value", () => {
      const object = {
        foo: "bar",
        bar: {
          hello: "world",
          a: 2,
        },
      };
      const path: NestedKeyOf<typeof object> = "foo";
      const expectedResult = "bar";

      const value = getNestedValue(path, object);

      expect(value).toBe(expectedResult);
    });
  });
  describe("When it's passed an invalid nested path", () => {
    test("Then it should return undefined", () => {
      const object = {
        foo: "bar",
        bar: {
          hello: "world",
          a: 2,
        },
      };
      const path = "example.hello";
      const expectedResult: any = undefined;

      const value = getNestedValue(path, object);

      expect(value).toBe(expectedResult);
    });
  });
});
