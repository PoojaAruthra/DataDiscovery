// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const grid = require('url').parse(process.env.SELENIUM_URL || '');

module.exports = function(config) {
  config.set({
    basePath: '',
    hostname: process.env.SELENIUM_URL ? require('ip').address() : 'localhost',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-junit-reporter'),
      require('karma-chrome-launcher'),
      require('karma-webdriver-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, 'dist/coverage/angular-frontend'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' },
        { type: 'cobertura' }
      ]
    },
    junitReporter: {
      outputFile: require('path').join(__dirname, 'dist/reports/angular-frontend/test-unit.xml'),
    },
    customLaunchers: {
      'Chrome-Webdriver': {
        base: 'WebDriver',
        config: {
          hostname: grid.hostname,
          port: grid.port
        },
        browserName: 'chrome'
      }
    },
    reporters: ['progress', 'kjhtml', 'junit'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: !process.env.SELENIUM_URL,
    browsers: [process.env.SELENIUM_URL ? 'Chrome-Webdriver' : 'Chrome'],
    singleRun: !!process.env.SELENIUM_URL,
    browserNoActivityTimeout: 100000
  });
};
