What is React Hooks?
React Hooks works only in functional components.

React hooks are functions that lets you to hook into React state and lifecycle features from function components.


1. useState()
suppose if we write a functional component and later want to add state in that component then before React V16.7 we have to convert that component into a class component, 
but with useState we can add state in that component only.
it is a hook that allows you to add state in a functional component.

e.g

import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);  
  }
  
  the above example is equivalent to below class component.
  
  class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  }
  
  
  we can pass parameters to useState(xyz); where the passed parameter get assigned as a default value of that state
