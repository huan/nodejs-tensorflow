{
  'targets': [
    {
      'target_name': '_tensorflow',
      'sources': [
        'src/main.cc'
      ],

      'include_dirs': [
        'third-party/tensorflow'
      ],

      'libraries': [
#TODO:
        '~/workspace/opensource/nodejs-tensorflow/third-party/tensorflow/bazel-bin/tensorflow/libtensorflow.so'
      ]
    }
  ]
}
