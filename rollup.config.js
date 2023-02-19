import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import uglify from 'rollup-plugin-uglify-es';
import filesize from 'rollup-plugin-filesize';
const path = require('path');

const extensions = [
  '.js'
];

export default {
  input: [
    './src',
    './src/prototypes',
    './src/prototypes/Array',
    './src/prototypes/Promise',
    './src/utils',
    './src/utils/array',
    './src/utils/debugging',
    './src/utils/fp',
    './src/utils/function',
    './src/utils/operators',
    './src/utils/promise',
  ],
  plugins: [
    alias({
      entries: [
        { find: '@', replacement: path.resolve('./src') },
      ]
    }),
    resolve({ extensions, preferBuiltins: false }),
    commonjs({ include: 'node_modules' }),
    babel({ babelHelpers: 'bundled' }),
    uglify(),
    filesize()
  ],
  output: [{
    name: 'JsUtils',
    dir: './dist',
    exports: 'auto',
    preserveModules: true,
    preserveModulesRoot: 'dist',
    format: 'cjs'
  }]
}