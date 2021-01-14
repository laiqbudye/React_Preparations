We can create multiple files for webpack.
for eg. we are creating here,

webpack.dev.js  - use for development
webpack.prod.js  - use in production
webpack.config.js / webpack.common.js - common config file

then when we need to merge these files (dev.js & prod.js) with common.js file then we can use webpack-merge pkg.
npm i --save-dev webpack-merge

so suppose if i want to merge common.js inside dev.js

dev.js
const common = require('./common.js');
const merge = require('webpack-merge);

module.exports = merge(common,{   // it will merge common js with object we pass to it
     mode: 'development',   
      output: {
        filename: "output.js",  // overiding default main.js name
        path: path.resolve(__dirname, "WebPack");  // WebPack is a folder name... src/WebPack/main.js
      }
})

------------------------------------------------------------------------------------------------------------------------------------------------

installing dev server

npm i --save-dev webpack-dev-server

so in scripts we need to add this as a task

scripts: {
  start: 'webpack-dev-server --config webpack.dev.js --open'
}

here, 
webpack-dev-server will create a development server so we dont need to run "npm start" each time.

--config webpack.dev.js - it will pickup config settings from webpack.dev.js

--open, will open web browser to show us the output




