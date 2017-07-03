#ifndef NODEJS_TF_TENSOR_SHAPE_H
#define NODEJS_TF_TENSOR_SHAPE_H

#include <node.h>
#include <node_object_wrap.h>

#include "tensorflow/core/framework/tensor_shape.h"

namespace nodejs_tf {

class TensorShape: public node::ObjectWrap {
  public:
    static void New(const FunctionCallbackInfo<Value>& args);
  private:
    TensorShape();
    ~TensorShape();

    tensorflow::TensorShape* self;
};

}

#endif
