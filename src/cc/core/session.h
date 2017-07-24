#ifndef NODEJS_TF_SESSION_H
#define NODEJS_TF_SESSION_H

#include <nan.h>

#include <tensorflow/core/public/session.h>

namespace nodejs_tf {

class Session: public Nan::ObjectWrap {
  public:
    static NAN_MODULE_INIT(Init);
    static NAN_METHOD(New);
  private:
    Session();
    ~Session();

    tensorflow::Session* self;
};

}

#endif
