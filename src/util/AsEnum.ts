type AsEnum<Enum> = Enum & { __enumBrand?: void };

export default AsEnum;
