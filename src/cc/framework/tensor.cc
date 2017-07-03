#include "./tensor.h"

namespace nodejs_tf {

using v8::Function;
using v8::FunctionCallbackInfo;
using v8::FunctionTemplate;
using v8::Isolate;
using v8::Local;
using v8::Persistent;
using v8::String;
using v8::Value;

void Tensor::New(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();

  Local<FunctionTemplate> fn = FunctionTemplate::New(isolate, Tensor::New);
  fn->SetClassName(String::NewFromUtf8(isolate, "Tensor"));

  Tensor* tensor = new Tensor();
  tensor->Wrap(args.This());
  args.GetReturnValue().Set(args.This());

  NODE_SET_PROTOTYPE_METHOD(fn, "toString", ToString);
}

Tensor::Tensor() {
  this->self = new tensorflow::Tensor();
}

Tensor::~Tensor() {
  delete this->self;
}

void Tensor::ToString(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  Tensor* tensor = ObjectWrap::Unwrap<Tensor>(args.Holder());

  args.GetReturnValue().Set(String::NewFromUtf8(isolate, tensor->self->DebugString().c_str()));
}

}
