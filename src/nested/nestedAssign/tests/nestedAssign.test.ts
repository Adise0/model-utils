import deepClone from "../../../util/deepClone/deepClone";
import nestedAssign from "../nestedAssign";

describe("Given nestedAssign", () => {
  describe("When it's given a shallow update", () => {
    test("Then it should return and mutate the source with the update", () => {
      const source = {
        foo: "bar",
      };
      const ogSource = JSON.parse(JSON.stringify(source));

      const update = {
        bar: "foo",
      };

      const expectedResult = {
        foo: "bar",
        bar: "foo",
      };

      const result = nestedAssign(source, update);

      expect(result).toEqual(expectedResult);
      expect(source).toEqual(ogSource);
    });
  });
  describe("When it's given a shallow object update", () => {
    test("Then it should return and mutate the source with the update", () => {
      const source = {
        foo: "bar",
      };
      const ogSource = JSON.parse(JSON.stringify(source));

      const update = {
        bar: { hello: "foo" },
      };

      const expectedResult = {
        foo: "bar",
        bar: { hello: "foo" },
      };

      const result = nestedAssign(source, update);

      expect(result).toEqual(expectedResult);
      expect(source).toEqual(ogSource);
    });
  });
  describe("When it's given a deep update", () => {
    test("Then it should return and mutate the source with the update", () => {
      const date = new Date();
      const source = {
        foo: "bar",
        bar: {
          something: {
            date,
            changeMe: 1,
          },
          hello: "world!",
          array: [1, 2],
        },
      };
      const ogSource = deepClone(source);

      const update = {
        bar: {
          something: {
            changeMe: 2,
            addMe: "hi!",
          },
          array: [1, 3],
        },
      };

      const expectedResult = {
        foo: "bar",
        bar: {
          something: {
            date,
            changeMe: 2,
            addMe: "hi!",
          },
          array: [1, 3],
          hello: "world!",
        },
      };

      const result = nestedAssign(source, update);

      expect(result).toEqual(expectedResult);
      expect(source).toEqual(ogSource);
    });
  });
});
