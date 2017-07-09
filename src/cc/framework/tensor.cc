#include "./tensor.h"

namespace nodejs_tf {

using v8::ArrayBuffer;
using v8::Function;
using v8::FunctionCallbackInfo;
using v8::FunctionTemplate;
using v8::Isolate;
using v8::Local;
using v8::Persistent;
using v8::String;
using v8::Value;

NAN_MODULE_INIT(Tensor::Init) {
  printf("cc::Tensor::Init\n");

  auto fn = Nan::New<FunctionTemplate>(Tensor::New);
  auto fn_name = Nan::New("Tensor").ToLocalChecked();

  fn->InstanceTemplate()->SetInternalFieldCount(1);
  fn->SetClassName(fn_name);

  Nan::Set(target, fn_name, fn->GetFunction());
}

NAN_METHOD(Tensor::New) {
  printf("cc: Tensor::New\n");
  if (!info.IsConstructCall()) {
    Nan::ThrowError("Wrong invokation, should be constructor call");
    return;
  }

  if (info.Length() < 4) {
    Nan::ThrowError("Not enough parameters to the constructor");
    return;
  }

  Tensor* tensor;
  auto dtype = static_cast<TF_DataType>(info[0]->IntegerValue());
  if (info.Length() == 4 || !info[4]->IsArrayBuffer()) {
    tensor = new Tensor(dtype, info[1]->IntegerValue(),
                               info[2]->IntegerValue(),
                               static_cast<size_t>(info[3]->IntegerValue()) );
  } else {
    void* data = info[4].As<ArrayBuffer>()->Externalize().Data();
    tensor = new Tensor(dtype, info[1]->IntegerValue(),
                               info[2]->IntegerValue(),
                               static_cast<size_t>(info[3]->IntegerValue()), data);
  }

  tensor->Wrap(info.This());
  info.GetReturnValue().Set(info.This());
}

NAN_METHOD(Tensor::shape) {
  Tensor* tensor = ObjectWrap::Unwrap<Tensor>(info.Holder());
}

void Tensor::ToString(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  Tensor* tensor = ObjectWrap::Unwrap<Tensor>(args.Holder());

  //args.GetReturnValue().Set(String::NewFromUtf8(isolate, tensor->self->DebugString().c_str()));
}

Tensor::Tensor(TF_DataType dtype, int64_t dims, int num_dims, size_t len) {
  printf("Create Tensor:::dtype: %d, dims: %lu, num_dims: %d, len: %lu\n", dtype, dims, num_dims, len);

  this->self = TF_AllocateTensor(dtype, &dims, num_dims, len);
}

void deallocator(void* data, size_t len, void* arg) {
  printf("deallocate: %lu", len);
}

Tensor::Tensor(TF_DataType dtype, int64_t dims, int num_dims, size_t len, void* data) {
  printf("Create Tensor with data:::dtype: %d, dims: %lu, num_dims: %d, len: %lu\n", dtype, dims, num_dims, len);
  //  TF_DataType, const int64_t* dims, int num_dims, void* data, size_t len,
  //  void (*deallocator)(void* data, size_t len, void* arg),
  //  void* deallocator_arg);
  this->self = TF_NewTensor(dtype, &dims, num_dims, data, len, deallocator, NULL);
}

Tensor::~Tensor() {
}


}
