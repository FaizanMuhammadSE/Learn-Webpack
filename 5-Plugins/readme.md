- In previous section-3 we talked about **Asset Module** which allows us to import images, fonts, text files
- In previous section-4 we talked about **Loaders**
  - Loaders allow us to import all other kinds of files that you can't handle using Asset Modules
  - Using webpack even we can import CSS files in our JS code
  - We can import SASS, LESS, handlebars, XML and so much more
  - Webpack loaders are JS libraries that help us to load/import all that stuff

### Plugins

- Plugins are additional javascript libraries that do everything that **loaders cannot do**.
- Plugins can also modify how the bundles themselves are created. e.g we can use _terser_ plugin to minimize the contents to decrease the bundle size. webpack provide some built-in plugins that not need to be installed as a separate npm package. e.g terser plugin is now a part of Webpack5 onwards

```
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  plugins: [new TerserPlugin()],
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
        test: /\.(scss)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'], // It will load the css file and inject it into the DOM
        // Order of loaders matters a lot, Webpack will apply them from right to left, so css-loader will be applied first and then style-loader
      },
    ],
  },
  mode: 'development',
};
```

- By using plugins, we can extract our styles into seprate files, rather than in JS file, to avoid increasing bundle size

  - This way, we also need to add our stylesheet in HTML, because now it is not a part of JS bundle

- By default, browser cache our downloaded files, to avoid network calls on page reload
- But this is dangerous what if our bundle.js file gets updated on CDN due to latest changes
- Browser will be serving files from cache

  - To avoid this problem, we give different names to our bundle files by using MD5 hashing, so whenever there is a change in code, newly created file will be of different name
  - Use this syntax while mentioning name of output file

  ```javascript
  output: bundle.[contenthash].js // contentHas will create be a new string every time output file changes
  ```

  - We can clean our output directory by using `CleanPlugin` or by using `clean` option provided by webpack
  - Now how will URLs inside out HTML file gonna change when build file names will change, obviously there is a plugin for this as well, **HTMLWebpackPlugin**
    - We can obivously set meta-tags, change title, description etc from webpack config file
