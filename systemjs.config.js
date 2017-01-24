/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // // angular bundles
      // '@angular/core': 'dist/vendor.js',
      // '@angular/common': 'dist/vendor.js',
      // '@angular/compiler': 'dist/vendor.js',
      // '@angular/platform-browser': 'dist/vendor.js',
      // '@angular/platform-browser-dynamic': 'dist/vendor.js',
      // '@angular/http': 'dist/vendor.js',
      // '@angular/router': 'dist/vendor.js',
      // '@angular/forms': 'dist/vendor.js',
      //
      // // other libraries
      // 'rxjs':                      'dist/vendor.js',
      // 'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: '../dist/bundle.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
