{
  'targets': [
    {
      'target_name': 'tensorflow',
      'sources': [
        'src/main.cc'
      ],

      'include_dirs': [
        'third-party/tensorflow'
      ],

      'libraries': [
#'-L./third-party/tensorflow/bazel-bin/tensorflow/libtensorflow.so'
        '-L./lib/libtensorflow.so'
      ]
    }
  ]
}
