#include "tensor_shape.h"

namespace nodejs_tf {

using v8::External;
using v8::FunctionTemplate;
using v8::Local;

TensorShape::TensorShape(): Nan::ObjectWrap() {
  //this->self = new tensorflow::TensorShape();
}

TensorShape::~TensorShape() {
}

NAN_MODULE_INIT(TensorShape::Init) {
  printf("cc: TensorShape::Init\n");
  auto fn = Nan::New<FunctionTemplate>(TensorShape::New);
  auto fn_name = Nan::New("TensorShape").ToLocalChecked();

  fn->InstanceTemplate()->SetInternalFieldCount(1);
  printf("field_count: %d\n", fn->InstanceTemplate()->InternalFieldCount());
  fn->SetClassName(fn_name);
  Nan::Set(target, fn_name, fn->GetFunction());
}

NAN_METHOD(TensorShape::New) {
  printf("cc: TensorShape::New\n");
  auto tensor_shape = new TensorShape();
  tensor_shape->Wrap(info.This());

  info.GetReturnValue().Set(info.This());
}

}
