declare module '*tensorflow.node' {
  const version: any;
  const Tensor: any;
  const TensorShape: any;
  export {version, Tensor, TensorShape}
}

declare module '*/types.proto' {
  const DataType: any;
  export {DataType};
}
