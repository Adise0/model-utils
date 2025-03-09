import IsEnum from "../util/IsEnum";
import WithoutEnumBrand from "../util/WithoutEnumBrand";

type AsBrandless<Schema extends object> = {
  [Key in keyof Schema]: IsEnum<Schema[Key]> extends true
    ? WithoutEnumBrand<Schema[Key]>
    : Schema[Key] extends Date
    ? Schema[Key]
    : Schema[Key] extends object
    ? AsBrandless<Schema[Key]>
    : Schema[Key];
};

export default AsBrandless;
