type NestedPartial<Schema> = Partial<{
  [Key in keyof Schema]?: Schema[Key] extends Date
    ? Schema[Key]
    : Schema[Key] extends object
    ? NestedPartial<Schema[Key]>
    : Schema[Key];
}>;

export default NestedPartial;
