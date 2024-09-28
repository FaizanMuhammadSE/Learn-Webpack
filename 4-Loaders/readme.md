- Webpack allow us to import lot of different stuff in our JS code, this is possible due to great features webpack provides
- In previous section we talked about **Asset Module** which allows us to import images, fonts, text files

### Loaders

- Loaders allow us to import all other kinds of files that you can't handle using Asset Modules
- Using webpack even we can import CSS files in our JS code
- We can import SASS, LESS, handlebars, XML and so much more
- Webpack loaders are JS libraries that help us to load/import all that stuff

#### Handling CSS [Using Loaders]

- While importing CSS class in our JS code, and bundling project with webpack, we got error, as webpack is unaware how to handle css files
  ![alt text](image.png)
- Now this can't be achieved through Webpack assets, we need loaders (npm pkgs/libraries) which will read css files, and will include style tags in our HTML file
  1. css-loader
  2. style-loader
- Order of loaders matters a lot, because webpack processes loaders from right to left, and we can use multiple loaders in single rule

```
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource', // It will create Separete file for these assets, and will be served over network
      },
      {
        test: /\.(css)$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
```

- For assets we use `type` and for loaders we use `use`
- Instead of plain CSS, we can also leverage CSS preprocessors as well like SASS, but for them we need loaders as well, e.g for SASS we will use `sass-loader` loader

```
    rules: [
      {
        test: /\.(scss)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
```

- Webpack will apply this rule in a sequence from right to left

1. First `sass-loader` will be used for preprocessing .scss files into css files
2. Then `css-loader` will be used on converted files to convert them in javascript representation
3. At last `style-loader` will be used to add styles into HTML
