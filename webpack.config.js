//This module creates an entry and output for webpack directed
//specific paths, output is bundled to firstbundle.js
var path = require('path');
module.exports = {
  entry: path.join(__dirname, 'src', 'app', 'app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'firstbundle.js'
  }
};
