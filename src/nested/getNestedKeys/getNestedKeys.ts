import NestedKeyOf from "../NestedKeyOf";

const getNestedKeys = <Schema extends object>(
  object: Schema
): NestedKeyOf<Schema>[] => {
  const nestedKeys: string[] = [];

  const checkObject = (nestedObj: object, path: string[] = []) => {
    Object.entries(nestedObj).forEach(([key, value]) => {
      if (typeof value === "object") {
        checkObject(value, [...path, key]);
        return;
      }

      nestedKeys.push(`${path.join(".")}.${key}`);
    });
  };
  checkObject(object);

  return nestedKeys as NestedKeyOf<Schema>[];
};

export default getNestedKeys;
// TODO: test
