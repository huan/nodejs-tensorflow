declare module '*tensorflow.node' {
  const Graph: any;
  const Operation: any; 
  const Session: any;
  const Tensor: any;
  const TensorShape: any;
  const version: any;
  export {
    Graph,
    Operation,
    Session,
    Tensor,
    TensorShape,
    version
  }
}

declare module '*/types.proto' {
  const DataType: any;
  export {DataType};
}
