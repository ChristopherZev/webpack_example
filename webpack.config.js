//This module creates an entry and output for webpack directed
//specific paths, output is bundled to [name].bundle.js
//[name]. is from webpack that allows you to use the key from a bundle
// i.e. app, about, etc to automatically create a bundle of that name
var path = require('path');
module.exports = {
//context helps avoid writing out src for every path
//if we specify source in context then the entry paths only need to
//include their specific via bundles
  context: path.join(__dirname, 'src'),
  entry: {
    //creates specific path(entry point) for the app bundle
    app: './app/app.js',
    about: './about/about.js',

  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module:{
    loaders: [
      {
        //Test tells webpack when to use a loader.
        //Any file with \.js extenstion will run through this loader
        // $ makes sure the file ends with .js

        // This style of code: /*directory here*/  is called regular expressions
        test: /\.js$/,
        // loader: 'babel' is the same as loadder: 'babel-loader'
        //webpack knows to find the babel loader, use -loader if not working
        loader: 'babel-loader',
        //Include and Exclude keys in loaders state what directories
        // the loaders should or should not run on. Including just the /src/
        // is a best practice due to main projects being in this directory
        include: /src/
        //exclude:
      }
    ]
  }
};
