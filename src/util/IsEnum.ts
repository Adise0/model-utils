type IsEnum<Type> = Type extends { __enumBrand?: any } ? true : false;

export default IsEnum;
