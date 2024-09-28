# Assets in Webpack 5

Webpack 5 provides powerful asset management capabilities, allowing you to handle various types of assets such as images, fonts, and other files. Here are some key features and concepts:

## Asset Modules

Webpack 5 introduces Asset Modules, which replace the need for specific loaders for assets. There are four types of Asset Modules:

1. **asset/resource**: Emits a separate file and exports the URL, separate file will exist in outPut directory,
 - _Cons:_ and to excess it network call be triggered
2. **asset/inline**: Exports the asset as a data URI / don't create separate file e.g for images will convert them in base64 and embed in bundle,
 - _Cons:_ as a consequence bundle size will be increased.
3. **asset/source**: Exports the source code of the asset in the form of string.
4. **asset**: Automatically chooses between exporting a data URI and emitting a separate file or embeding asset in bundle based on the file size we can set this maxSize threshold as well.

## Configuration

- To use Asset Modules, you can configure them in your `webpack.config.js` file:

- We can add as much rule as we want to manage assets, e.g how to handle images, how to handle fonts, styles, text files etc

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.txt$/i,
        type: 'asset/source',
      },
    ],
  },
};
```

## Handling Images

With Asset Modules, handling images becomes straightforward. You can import images directly in your JavaScript or CSS files:

```javascript
import logo from './images/logo.png';

const img = document.createElement('img');
img.src = logo;
document.body.appendChild(img);
```

## Output Configuration

You can customize the output directory and filename for your assets:

```javascript
module.exports = {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },
};
```

## Conclusion

Webpack 5 simplifies asset management with Asset Modules, making it easier to handle and optimize various types of assets in your projects. By configuring the appropriate rules, you can efficiently manage images, fonts, and other files.

For more details, refer to the [official Webpack documentation](https://webpack.js.org/guides/asset-modules/).
