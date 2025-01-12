/* eslint-disable no-param-reassign */

import NestedPartial from "../NestedPartial";
import isObject from "../../checkers/isObject/isObject";

/**
 * Creates an object by assigning the update recursively
 * @param source The target object
 * @param update The update object
 * @returns The merged object
 */
const nestedAssign = <TSchema = any, Update = any>(
  source: TSchema,
  update: NestedPartial<TSchema> | Update
): any => {
  const newSource = { ...source };

  Object.keys(update).forEach((key) => {
    if (["__proto__", "constructor", "prototype"].includes(key)) {
      return;
    }

    if (isObject((source as any)[key]) && isObject((update as any)[key])) {
      (newSource as any)[key] = nestedAssign(
        (source as any)[key],
        (update as any)[key]
      );
      return;
    }
    if ((update as any)[key] !== undefined) {
      (newSource as any)[key] = (update as any)[key];
    }
  });

  return newSource;
};

export default nestedAssign;
