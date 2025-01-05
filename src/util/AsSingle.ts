type AsSingle<Schema> = Schema extends (infer InfeeredSchema)[]
  ? InfeeredSchema
  : Schema;

export default AsSingle;
