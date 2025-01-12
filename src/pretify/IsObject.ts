/**
 * Wrapper for `Value extends object ?...`.
 * Is used as `IsObject<Value> extends true ? ...`
 */
type IsObject<Value> = Value extends object ? true : false;
export default IsObject;
