
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
