type OmitUnion<T, U> = T extends U ? never : T;

export default OmitUnion;
