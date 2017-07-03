#include "tensor_shape.h"

namespace nodejs_tf {

using v8::External;
using v8::Local;

TensorShape::TensorShape() {
}

TensorShape::~TensorShape() {
}

NAN_METHOD(TensorShape::New) {
  TensorShape* obj = new TensorShape();
  obj->Wrap(info.This());

  info.GetReturnValue().Set(info.This());
}

}
