module.exports = {
  output: {
    libraryTarget: 'commonjs'
  },
  mode: 'production',
  entry: './lib/browser.js',
  module: {
    rules: [
      {
        test: /\.jsonld$/,
        loader: 'json-loader'
      }
    ]
  }
};
