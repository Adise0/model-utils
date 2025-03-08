import IsEnum from "../util/IsEnum";
import WithoutEnumBrand from "../util/WithoutEnumBrand";

type NestedPartial<Schema> = Partial<{
  [Key in keyof Schema]?: Schema[Key] extends Date
    ? Schema[Key]
    : IsEnum<Schema[Key]> extends true
    ? Schema[Key]
    : Schema[Key] extends object
    ? NestedPartial<Schema[Key]>
    : Schema[Key];
}>;

export default NestedPartial;
