//This module creates an entry and output for webpack directed
//specific paths, output is bundled to [name].bundle.js
//[name]. is from webpack that allows you to use the key from a bundle
// i.e. app, about, etc to automatically create a bundle of that name
var path = require('path');
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    //creates specific path(entry point) for the app bundle
    app: './app/app.js',
    about: './about/about.js',

  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  }
};
