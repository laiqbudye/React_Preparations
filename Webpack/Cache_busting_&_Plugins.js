
what is cache busting?
  so suppose my webpack bundle returning me main.js file & i have hosted same file on server.
when any user hits my site he will get main.js file downloaded & website will open on his system. 
in the meantime suppose i have made some code changes n updated my main.js. when same user try to access my site n if previous main.js file is present in his cache
then it will picked up from cache instead of serverr. so this is issue.

to solve this issue we can add hashcode to main.js file which will be main.[hashcode].js

to apply this hashcode we need to set this in webpack.config.js

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.[contentHash].js",  // applying hash... // from webpack V5 contentHash replaced with contenthash (no capital H)
    path: path.resolve(__dirname, "dist");  // dist is a folder name... src/dist/main.5asa35345jkhjwjbf\shj.js
  },
  mode: 'development'   // by default "production", if we set to development then it wont minify our code
}

so till this step we have created main.js with dynamic hashcode which will change every time when something changes in code.

so how do we include this dynamic main.js in our html file, so here we require plugins


-------------------------------------------------------------------------------------------------------------------------------
  
  what is plugin?
    it is a option used to customize webpack build process in a variety of ways.
  we need to pass plugins as an array.
  
  HtmlWebpackPlugin: this is especially useful for webpack bundles that contains hashcode in the file name which changes on every compilation.
  this plugin generates html file (index.html) for us including <script src= main.hash.js>. we can supply our own template also.
  
  module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.[contentHash].js",  // applying hash... // from webpack V5 contentHash replaced with contenthash (no capital H)
    path: path.resolve(__dirname, "dist");  // dist is a folder name... src/dist/main.5asa35345jkhjwjbf\shj.js
  },
  
  plugins: [new HtmlWebpackPlugin()]   // it will create index.html inside dist folder with scipt src set to main.hash.js
}
  
//to supply our own template we need to pass this as follows:- 
  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html'   // it will take our template.html file & make index.html file with same code & add <script src= main.hash.js> inside of that file.
  })]
  
  
  
