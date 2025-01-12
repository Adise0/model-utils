/**
 * Nested key represented as dot separated string.
 * Example: "foo.bar"
 */
type NestedKeyOf<Schema extends object> = {
  [Key in keyof Schema & (string | number)]: Schema[Key] extends Date
    ? `${Key}`
    : Schema[Key] extends Array<any>
    ? `${Key}`
    : Schema[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<Schema[Key]>}`
    : `${Key}`;
}[keyof Schema & (string | number)];

export default NestedKeyOf;
