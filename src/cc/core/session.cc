#include "session.h"

namespace nodejs_tf {

NAN_MODULE_INIT(Session::Init) {
  auto fn = Nan::New<v8::FunctionTemplate>(Session::New);
  auto fn_name = Nan::New("Session").ToLocalChecked();

  fn->InstanceTemplate()->SetInternalFieldCount(1);
  fn->SetClassName(fn_name);

  Nan::Set(target, fn_name, fn->GetFunction());
}

NAN_METHOD(Session::New) {
  printf("cc: Session::New\n");

  Session *session = new Session();
  session->Wrap(info.This());
  info.GetReturnValue().Set(info.This());
}

Session::Session() {
  tensorflow::SessionOptions options;

  self = NewSession(options);
}

Session::~Session() {
}

}
