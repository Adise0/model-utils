/**
 * Wrapper for `Value extends Date ?...`.
 * Is used as `IsDate<Value> extends true ? ...`
 */
type IsDate<Value> = Value extends Date ? true : false;
export default IsDate;
