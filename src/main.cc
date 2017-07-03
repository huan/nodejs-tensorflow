#include <nan.h>
#include <node.h>
#include <node_object_wrap.h>
#include <string.h>

#include <tensorflow/c/c_api.h>
#include <tensorflow/core/platform/logging.h>

#include "cc/framework/tensor.h"
#include "cc/framework/tensor_shape.h"

namespace nodejs_tf {

using v8::FunctionCallbackInfo;
using v8::FunctionTemplate;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void Version(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  const char *version = TF_Version();
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, version));
}

void init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "version", Version);
  NODE_SET_METHOD(exports, "Tensor", Tensor::New);
  TensorShape::Init(exports);
}

NODE_MODULE(tensorflow, init)

}
