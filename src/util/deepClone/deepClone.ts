/**
 * Clones the passed object
 * @param obj The object to clone
 * @returns The cloned object
 */
const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj) as T;
  if (Array.isArray(obj)) return obj.map(deepClone) as T;

  return Object.keys(obj).reduce(
    (acc, key) => ({ ...acc, [key]: deepClone((obj as any)[key]) }),
    {} as T
  );
};

export default deepClone;
