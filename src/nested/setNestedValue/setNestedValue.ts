import NestedKeyOf from "../NestedKeyOf";

/**
 * `MUTATES` the original object by adding the data at the given path
 * @param path The path to set the data to
 * @param original The original or source object
 * @param data The data to set
 */
const setNestedValue = <Schema extends object = any>(
  path: NestedKeyOf<Schema>,
  original: object,
  data: any
): any => {
  const keys = path.split(".");
  let target: any = original;

  keys.slice(0, -1).forEach((key: keyof typeof target) => {
    if (!target[key]) target[key] = {};
    target = target[key];
  });
  target[keys[keys.length - 1]] = data;
};

export default setNestedValue;
