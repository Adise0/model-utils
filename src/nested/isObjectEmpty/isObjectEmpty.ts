/**
 * Checks whether an object has no propperties
 * @param object The object to check
 * @returns `boolean` Whether the object is empty
 */
const isObjectEmpty = (object: object): boolean => {
  try {
    Object.keys(object).forEach((key) => {
      if (Object.hasOwn(object, key)) {
        throw new Error("Has propperty");
      }
    });

    return true;
  } catch {
    return false;
  }
};

export default isObjectEmpty;
