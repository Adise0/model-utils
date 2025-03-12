import IsEnum from "../util/IsEnum";
import IsUnion from "../util/IsUnion";

// Helper type to handle a single type (which could be part of a union)
type HandleSingleType<Type> = Type extends Date
  ? Type
  : IsEnum<Type> extends true
  ? Type
  : Type extends object
  ? NestedPartial<Type>
  : Type;

// Helper type to distribute over unions
type DistributePartial<Type> = Type extends any
  ? HandleSingleType<Type>
  : never;

// Main type
type NestedPartial<Schema> = Partial<{
  [Key in keyof Schema]?: // Check if we're dealing with a union type
  IsUnion<Schema[Key]> extends true
    ? DistributePartial<Schema[Key]> // Handle each union member separately
    : HandleSingleType<Schema[Key]>; // Handle non-union types directly
}>;

export default NestedPartial;
