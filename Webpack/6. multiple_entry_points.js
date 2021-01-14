we can add multiple entry points in config file.

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",    // here it will create two different bundles named as main.hash.js & vendor.hash.js
  }
  output: {
    filename: "output.js",  // overiding default main.js name
    path: path.resolve(__dirname, "WebPack");  // WebPack is a folder name... src/WebPack/main.js
  },
  mode: 'development'   // by default "production", if we set to development then it wont minify our code
}
