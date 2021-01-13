How to configure webpack with normal JS project. (not for react as crea-react-app does it for us)

1. npm i --save-dev webpack webpack-cli

2. then create script for that in package.json

scripts: {
  startwebpack: 'webpack'
}

so when we will run npm start it will first look for index.js file at (src/index.js) location & if not found then will throw an error.
if found the it starts bundling our app and outputs single file at folder (src/dist/main.js).  // default name & path.. we can change it from webpack.config.js

3. make webpack.config.js to set options externally for webpack. we can change default values from this file like destination folder n all

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "output.js",  // overiding default main.js name
    path: path.resolve(__dirname, "WebPack");  // WebPack is a folder name... src/WebPack/main.js
  }
}

4. so we need to tell webpack to pick config changes from this file.

scripts: {
  startwebpack: 'webpack --config webpack.config.js'
}

here it will start from entry point (index.js) & outputs bundled file inside src/WebPack/output.js



SUMMARY
whenever we run npm startwebpack task then it first searches for src/index.js (default entry point) and then it travers throught all the import statements in each file 
& bundle them together. suppose if we have 10 files and out of those 1 file we didnt import anywhere so it will create bundle for 9 files as it wont get reference to that file in imports.
