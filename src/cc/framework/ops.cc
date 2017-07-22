#include "./ops.h"

namespace nodejs_tf {

using v8::FunctionTemplate;

NAN_MODULE_INIT(Operation::Init) {
  printf("cc::Operation::Init\n");

  auto fn = Nan::New<FunctionTemplate>(Operation::New);
  auto fn_name = Nan::New("Operation").ToLocalChecked();

  fn->InstanceTemplate()->SetInternalFieldCount(1);
  fn->SetClassName(fn_name);

  Nan::Set(target, fn_name, fn->GetFunction());
}

NAN_METHOD(Operation::New) {
  printf("cc::Operation::New\n");

  if (!info.IsConstructCall()) {
    Nan::ThrowError("Wrong invokation, should be constructor call");
    return;
  }

  Operation* op = new Operation();
}

Operation::Operation() {
  printf("Create Operation\n");
  this->self = new tensorflow::Operation();
}

Operation::~Operation() {
}

}
