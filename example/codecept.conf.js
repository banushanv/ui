exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      waitForTimeout: 5000,
      show: false,
    },

    REST: {}
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'example'
}