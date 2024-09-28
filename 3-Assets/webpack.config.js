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
      // {
      //   test: /\.(png|jpg|jpeg|gif|svg)$/i,
      //   type: 'asset/inline', // It will embed the asset in the bundle itself in Base64-format, consequence is bundle size will increase
      // },
      {
        test: /\.(txt)$/i,
        type: 'asset/source', // It will embed the asset in the bundle itself
      },
      // If we will set type to 'asset' then Webpack will automatically decide whether to embed or create separate file based on the size of the asset
      // So if size is less than 8kb then it will embed (asset/inline) the asset in the bundle itself in Base64Format, otherwise it will create separate file (asset/resource)
    ],
  },
  mode: 'development',
};
