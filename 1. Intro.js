// React is a javascript library for building user interfaces.



// to create an element without JSX we can write it as below..
import React from 'react';

const title = React.createElement('h1', {}, 'My First React Code');

/*
here,
  h1 - is the component (type of element we are creating),
    {} - is the props (is an object containig properties),
      My First React Code - children
*/


// when we create element using JSX

<h1> My First React Code </h1>

// in the above example also react internally converts to React.createElement('h1', {}, 'My First React Code');


--------------------------------------------------------------------------------------------------------------------------------------------


// To render something on DOM we use render method from reactDOM

import ReactDOM from 'react-dom';

ReactDOM.render(
  title,      // this is the component / element that we need to render on page
  document.getElementById('root')    // this is the actual DOM element on which we are going to render our component
);
