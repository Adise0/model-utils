import NestedKeyOf from "../NestedKeyOf";

const getNestedValue = <Schema extends object = any>(
  path: NestedKeyOf<Schema> | string,
  object: Schema
): any => {
  const keys = path.split(".");
  let target: any = object;

  keys.slice(0, -1).forEach((key: keyof typeof target) => {
    if (target === undefined) return;
    if (!target[key]) return;
    target = target[key];
  });
  if (target === undefined) return undefined;

  return target[keys[keys.length - 1]];
};

export default getNestedValue;
