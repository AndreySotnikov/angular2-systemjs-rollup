import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import gzip from "rollup-plugin-gzip";

export default {
  entry: 'app/main.ts',
  dest: 'dist/bundle.js',
  format: 'iife',
  plugins: [
    typescript({
      typescript: require("typescript")
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    gzip()
  ],
  external: [
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated'
  ],
  globals: {
    '@angular/common': 'vendor._angular_common',
    '@angular/compiler': 'vendor._angular_compiler',
    '@angular/core': 'vendor._angular_core',
    '@angular/http': 'vendor._angular_http',
    '@angular/platform-browser': 'vendor._angular_platformBrowser',
    '@angular/platform-browser-dynamic': 'vendor._angular_platformBrowserDynamic',
    '@angular/router': 'vendor._angular_router',
    '@angular/forms': 'vendor._angular_forms'
  }
}
