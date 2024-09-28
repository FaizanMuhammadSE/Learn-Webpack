# Integrate Webpack

This repository contains a guide and examples for integrating Webpack into your projects.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Webpack is a powerful module bundler for JavaScript applications. It takes modules with dependencies and generates static assets representing those modules.

## Installation

To install Webpack, you need to have Node.js and npm installed. Run the following command to install Webpack and Webpack CLI:

```bash
npm install --save-dev webpack webpack-cli
```

## Configuration

Create a `webpack.config.js` file in the root of your project:

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};
```

## Usage

To bundle your application, run the following command:

```bash
npx webpack
```

This will create a `dist` folder with the bundled `bundle.js` file.
