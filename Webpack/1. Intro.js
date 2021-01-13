What is Webpack?
webpack is a bundling tool which takes bunch of files & turn them into a single file.

basically it creates 4 files:-
1. Main.[hash].chunk.js - is all of our application files like app.js, contacts.js, about.js

2. Main.[hash].chunk.css - represents all css code our application needs. if we write inline css in JS file, that code also will get compiled to CSS.

3. Number.[hash].chunk.js - represents all the libraries used in our application.

4. Runtime-main.[hash].js - represents a small webpack runtime logic used to load and run our application.
