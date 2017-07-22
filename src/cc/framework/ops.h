#ifndef NODEJS_TF_OPS_H
#define NODEJS_TF_OPS_H

#include <nan.h>

#include <tensorflow/cc/framework/ops.h>

namespace nodejs_tf {


class Operation: public Nan::ObjectWrap {
  public:
    static NAN_MODULE_INIT(Init);
    static NAN_METHOD(New);
  private:
    Operation();
    ~Operation();

    tensorflow::Operation* self;
};

}

#endif
