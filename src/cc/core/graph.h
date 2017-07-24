#ifndef NODEJS_TF_GRAPH_H
#define NODEJS_TF_GRAPH_H

#include <nan.h>

#include <tensorflow/core/graph/graph.h>

namespace nodejs_tf {

class Graph: public Nan::ObjectWrap {
  public:
    static NAN_MODULE_INIT(Init);
    static NAN_METHOD(New);
  private:
    Graph();
    ~Graph();
};

}

#endif
