type NestedValue<
  Schema,
  Path extends string,
> = Path extends `${infer Head}.${infer Tail}`
  ? Head extends keyof Schema
    ? NestedValue<Schema[Head], Tail>
    : never
  : Path extends keyof Schema
    ? Schema[Path]
    : never;

export default NestedValue;
