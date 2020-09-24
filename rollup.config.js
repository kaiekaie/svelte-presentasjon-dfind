import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';

import { transform } from 'rollup-plugin-insert';
import { transFormExtra, nodeserve, testPlugin } from './plugins/index';

const production = false;
const svelteoptions = require('./svelte.config');

let regular = {
  input: 'src/main.ts',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    svelte(svelteoptions),
    commonjs(),
    testPlugin(),
    resolve(),
    !production && livereload('public'),
    production && terser(),
    typescript({ sourceMap: !production }),
    transform(transFormExtra, {
      include: ['**/tabs/example*.svelte'],
    }),
    terser(),
    !production &&
      serve({
        contentBase: 'public',
        port: 1337,
        open: false,
        historyApiFallback: true,
      }),
  ],
  watch: {
    clearScreen: false,
    chokidar: {
      usePolling: true,
    },
  },
};

export default [regular];
