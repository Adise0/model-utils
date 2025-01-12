/**
 * Checks whether the passed value is a function
 * @param value The value to check
 * @returns `boolean` whether it is a function
 */
const isFunction = (value: any) =>
  typeof value === "function" && !value.prototype;

export default isFunction;
