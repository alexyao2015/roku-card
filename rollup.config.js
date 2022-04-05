import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import json from '@rollup/plugin-json';
import livereload from 'rollup-plugin-livereload';

const dev = process.env.ROLLUP_WATCH;

const serveopts = {
  contentBase: ['./dist'],
  host: '0.0.0.0',
  port: 5000,
  allowCrossOrigin: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};
const reloadopts = {
  port: 12345,
  delay: 300,
  clientUrl: 'http://dev:12345/livereload.js?snipver=1',
};

const plugins = [
  nodeResolve({}),
  commonjs(),
  typescript(),
  json(),
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled',
  }),
  dev && serve(serveopts),
  !dev && terser(),
  dev && livereload(reloadopts),
];

export default [
  {
    input: 'src/card.ts',
    output: {
      dir: 'dist',
      format: 'es',
      sourcemap: dev ? 'inline' : false,
    },
    plugins: [...plugins],
  },
];
