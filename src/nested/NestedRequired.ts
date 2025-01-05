export type WithRequired<Schema, Path extends string> = Schema & {
  [Key in keyof Schema as Key extends Path ? Key : never]-?: NonNullable<
    Schema[Key]
  >;
};

type RequiredNested<
  Schema,
  Path extends string
> = Path extends `${infer Head}.${infer Tail}`
  ? Head extends keyof Schema
    ? {
        [K in keyof Schema]: K extends Head
          ? RequiredNested<Schema[K], Tail>
          : Schema[K];
      }
    : Schema
  : WithRequired<Schema, Path>;

export default RequiredNested;
