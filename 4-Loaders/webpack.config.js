const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource', // It will create Separete file for these assets, and will be served over network
      },
      {
        test: /\.(txt)$/i,
        type: 'asset/source', // It will embed the asset in the bundle itself
      },
      {
        test: /\.(css)$/i,
        use: ['style-loader', 'css-loader'], // It will load the css file and inject it into the DOM
      },
    ],
  },
  mode: 'development',
};
