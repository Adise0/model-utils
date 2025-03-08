import AsEnum from "./AsEnum";

type WithoutEnumBrand<Type> = Type extends AsEnum<infer U> ? U : Type;

export default WithoutEnumBrand;
