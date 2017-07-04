{
  'targets': [
    {
      'target_name': 'tensorflow',
      'sources': [
        'src/main.cc',
        'src/cc/framework/tensor.cc',
        'src/cc/framework/tensor_shape.cc'
      ],

      'include_dirs': [
        '<!(node -e "require(\'nan\')")',
        '<(module_root_dir)/third-party/tensorflow',
        '<(module_root_dir)/third-party/tensorflow/deps/external/eigen_archive',
        '<(module_root_dir)/third-party/tensorflow/deps/external/protobuf/src',
        '<(module_root_dir)/third-party/tensorflow/deps/execroot/tensorflow/bazel-out/local-opt/genfiles'
      ],

      'conditions': [
        ['OS=="linux"', {
          'libraries': [
            '<(module_root_dir)/lib/libtensorflow.so'
          ],
          'cflags_cc!': ['-fno-rtti']
        }]
      ]
    }
  ]
}
