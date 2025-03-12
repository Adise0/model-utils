type IsPrimitiveOrConstructor<Type> = Type extends string
  ? true
  : Type extends string
  ? true
  : Type extends number
  ? true
  : Type extends boolean
  ? true
  : Type extends String
  ? true
  : Type extends Boolean
  ? true
  : Type extends Number
  ? true
  : Type extends Date
  ? true
  : false;

export default IsPrimitiveOrConstructor;
