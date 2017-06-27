#!/bin/bash

export PYTHON_BIN_PATH=/usr/bin/python2.7 # Please specify the location of python. [Default is ...
export PYTHON_LIB_PATH=/usr/lib/python2.7/site-packages/ # Please input the desired Python library path to use.  Default is ...
export TF_NEED_MKL=0 # Do you wish to build TensorFlow with MKL support? [y/N]
export CC_OPT_FLAGS="-march=native" # Please specify optimization flags to use during compilation when bazel option "--config=opt" is specified
export TF_NEED_JEMALLOC=1 # Do you wish to use jemalloc as the malloc implementation? [Y/n]
export TF_NEED_GCP=0 # Do you wish to build TensorFlow with Google Cloud Platform support? [y/N]
export TF_NEED_HDFS=0 # Do you wish to build TensorFlow with Hadoop File System support? [y/N]
export TF_ENABLE_XLA=0 # Do you wish to build TensorFlow with the XLA just-in-time compiler (experimental)? [y/N]
export TF_NEED_VERBS=0 # Do you wish to build TensorFlow with VERBS support? [y/N]
export TF_NEED_OPENCL=0 # Do you wish to build TensorFlow with OpenCL support? [y/N]
export TF_NEED_CUDA=0 # Do you wish to build TensorFlow with CUDA support? [y/N]
export TF_NEED_MPI=0 # Do you wish to build TensorFlow with MPI support? [y/N]

cd ./third-party/tensorflow
./configure
