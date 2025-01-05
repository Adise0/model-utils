/**
 * This utility ensures that at least one of the passed keys are present in the object
 */
type AtLeastOne<Schema, Keys extends keyof Schema = keyof Schema> = Omit<
  Schema,
  Keys
> &
  {
    [K in Keys]-?: Required<Pick<Schema, K>> & Partial<Omit<Schema, K>>;
  }[Keys];

export default AtLeastOne;
