
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import gzip from "rollup-plugin-gzip";

export default {
  entry: 'vendor.ts',
  dest: 'dist/vendor.js',
  format: 'iife',
  moduleName: 'vendor',
  plugins: [
    typescript({
      typescript : require("typescript")
    }),
    resolve({ jsnext: true,
      main: true,
      browser: true }),
    commonjs({
      include: 'node_modules/**',
    }),
    gzip()
  ]
}
