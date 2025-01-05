/**
 * Converts date types to string types
 */
type DateToString<Schema> = {
  [Key in keyof Schema]: Schema[Key] extends Date
    ? string
    : Schema[Key] extends object
    ? DateToString<Schema[Key]>
    : Schema[Key];
};

export default DateToString;
