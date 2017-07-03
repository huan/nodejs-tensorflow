#ifndef NODEJS_TF_TENSOR_H
#define NODEJS_TF_TENSOR_H

#include <node.h>
#include <node_object_wrap.h>

#include <tensorflow/core/framework/tensor.h>

namespace nodejs_tf {

using v8::FunctionCallbackInfo;
using v8::Value;

class Tensor: public node::ObjectWrap {
  public:
    static void New(const FunctionCallbackInfo<Value>& args);
  private:
    tensorflow::Tensor* getTensor();
    Tensor();
    ~Tensor();
    static void ToString(const FunctionCallbackInfo<Value>& args);

    tensorflow::Tensor* self;
};

}
#endif
