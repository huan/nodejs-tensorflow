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

      'conditions': [
        ['OS=="linux"', {
          'libraries': [
            '<(module_root_dir)/lib/libtensorflow.so'
          ]
        }]
      ]
    }
  ]
}
