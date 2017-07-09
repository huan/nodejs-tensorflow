#ifndef NODEJS_TF_TENSOR_H
#define NODEJS_TF_TENSOR_H

#include <nan.h>

#include <tensorflow/c/c_api.h>

#include "tensor_shape.h"

namespace nodejs_tf {

using v8::FunctionCallbackInfo;
using v8::Value;

class Tensor: public Nan::ObjectWrap {
  public:
    static NAN_MODULE_INIT(Init);
    static NAN_METHOD(New);
    static NAN_METHOD(shape);
  private:
    Tensor(TF_DataType dtype, int64_t dims, int num_dims, size_t len);
    Tensor(TF_DataType dtype, int64_t dims, int num_dims, size_t len, void* data);
    ~Tensor();
    static void ToString(const FunctionCallbackInfo<Value>& args);

    TF_Tensor* self;
};

}
#endif
