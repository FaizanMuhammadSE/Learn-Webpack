- In previous section-3 we talked about **Asset Module** which allows us to import images, fonts, text files
- In previous section-4 we talked about **Loaders**
  - Loaders allow us to import all other kinds of files that you can't handle using Asset Modules
  - Using webpack even we can import CSS files in our JS code
  - We can import SASS, LESS, handlebars, XML and so much more
  - Webpack loaders are JS libraries that help us to load/import all that stuff

### Plugins

- Plugins are additional javascript libraries that do everything that **loaders cannot do**.
- Plugins can also modify how the bundles themselves are created. e.g we can use _terser_ plugin to minimize the contents to decrease the bundle size. webpack provide some built-in plugins that not need to be installed as a separate npm package. e.g terser plugin is now a part of Webpack5 onwards
