What are diferent routers available in react-router?

Thre are 3 different routers available
1. BrowserRouter
2. HashRouter
3. MemoryRouter

1. BrowserRouter
this is most popular & most widely used router.
works perfectly on all modern browsers which supports html5 history API.
this is used for application which have dynamic server that knows how to handle any type of URL.
It assumes, your server handles all the request URL (eg., /, /about) and points to root index.html. From there, BrowserRouter take care of routing the relevant page.

/*
  You can go in history
  https://example.com/
  https://example.com/about
*/
import { BrowserRouter as Router } from 'react-router-dom';


2. HashRouter
it uses client side hash routing.
Whenever, there is a new route get rendered, it updated the browser URL with hash routes. (eg., /#/about)
Hash portion of the URL won’t be handled by server, server will always send the index.html for every request and ignore hash value. Hash value will be handled by react router. (at client-side)
It is used to support legacy browsers which usually doesn’t support HTML pushState API 
This route isn’t recommended by the team who created react router package. 
Use it only if you need to support legacy browsers or don’t have server logic to handle the client side routes

/*
  Hashed routes, you can go in history.
  https://example.com/#/
  https://example.com/#/about
*/
import { HashRouter as Router } from 'react-router-dom';


3. MemoryRouter
this router does not change URL in the address bad whenever page gets re-render, instead it keeps URL changes in the memory.
it is very useful for testing & non browser enviornments.
But in browsers, it does not have history so we cant go back or orward using browser history API.

// https://example.com (same url for all routes)
import { MemoryRouter as Router } from 'react-router-dom';

For more info visit:- https://learnwithparam.com/blog/different-types-of-router-in-react-router/
