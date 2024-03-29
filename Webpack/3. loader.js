What are loaders in webpack?
loaders are transformations that are applied to the source code of a module. they allows to pre-process files as we import or load them.
loaders can transform file from typescript to JS or load inline images as data URLs.


for example: loading .CSS file with loaders

we will require style-loader & css-loader

style-loader - injects CSS into the DOM.
css-loader - The css-loader interprets @import and url() like import/require() and will resolve them.

then we need to write rules for the same

module.exports = {
  module: {
    rules: [  // picked this rule from official website (https://webpack.js.org/loaders/css-loader/)
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]  // to use it here we also need to install these npm install --save-dev css-loader style-loader
      },
    ],
  },
};


// in utube video (https://www.youtube.com/watch?v=rrMGUnBmjwQ&list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8&index=5) we have one main.css file, so after applying css-loader on 
that file, it created equivalent JS code for that css code and bundled that inside main.js file.

so css-loader takes your css & convert it into JS
& style-loader takes that JS(which is css originally) & inject it into DOM.

----------------------------------------------------------------------------------------------------------------------------------------------------------------

SCSS Loader

like scss files are not actual css files, we first need to compile themt to css & then we can use that.

same concept applies here,
  
  first we need to translate/compile sass file to css file  (sass-loader)
  css file to JS file (css-loader)
  then inject that file in DOM  (style-loader)

module.exports = {
  module: {
    rules: [  // picked this rule from official website (https://webpack.js.org/loaders/css-loader/)
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "sass-loader"]  // here tasks get executed from last to first (descending order)
      },
    ],
  },
};

-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  
Images (.jpg, .png, .svg) loader - file-loader

file-loader resolves import or require on a file into a url and emits the file into output directory.

module.exports = {
  module: {
    rules: [  // picked this rule from official website (https://webpack.js.org/loaders/css-loader/)
      {
        test: /\.(svg|jpg|png|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: [name].[hash].[ext],
            outputPath: "imgs"
          }
        }
      },
    ],
  },
};





