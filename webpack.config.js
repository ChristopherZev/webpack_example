//This module creates an entry and output for webpack directed
//specific paths, output is bundled to [name].bundle.js
//[name]. is from webpack that allows you to use the key from a bundle
// i.e. app, about, etc to automatically create a bundle of that name
var path = require('path');
//requires webpack plugin for use in Plugins module
var htmlPluginWebpack = require('html-webpack-plugin');
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
  },
  //Open webpack devServer to index.html instead of root directory
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    //Prevent a webpack status bar from displaying, the iframe
    inline: true,
    //prints out errors-only when bundling via web devServer
    stats: 'errors-only'
  },
  plugins: [
    new htmlPluginWebpack({
      //injects scripts into body by default, could change to other location
      template: path.join(__dirname, 'src','index.html'),
      // hash files to the file name to automatically inject them
      hash: true,
      //chunks selects which bundle to use for this index or other specified
      //html files
      chunks:['app'] // injects app bundle script to index
    }),
    new htmlPluginWebpack({
      //injects scripts into body by default, could change to other location
      template: path.join(__dirname, 'src','index.html'),
      // hash files to the file name to automatically inject them
      hash: true,
      filename: 'about.html',//about.html is a new filename for about bundle
      chunks: ['about']// injects about bundle script to index
    })

  ]
};
