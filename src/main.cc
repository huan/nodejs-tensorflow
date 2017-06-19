#include <node.h>
#include <node_object_wrap.h>

#include <tensorflow/c/c_api.h>
#include <tensorflow/core/platform/logging.h>

namespace demo {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

using tensorflow::internal::LogString;

void Tensor(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  TF_Tensor tensor();
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "world"));
}

void init(Local<Object> exports) {
  Object obj();
  NODE_SET_METHOD(exports, "Tensor", Tensor);
}

NODE_MODULE(tensorflow, init)

}
