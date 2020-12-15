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
  
  
  useState() returns an array.. (if we chek type of return value in console it return "object") 2 parametrs 
  1. current state (in the above e.g count)
  2. function to set current state (in the above e.g setCount)

  we can pass parameters to useState(xyz); where the passed parameter get assigned as a default value of that state. the param can be number, string, obj or array.

usestate works differently as compared to setState.
when we update state with useState then only that state get updated & it ignores all other states.

e.g
function UserInfoFunction() {
  const [userInfo, setUserInfo] = React.useState({ 
    firstName: 'John', lastName: 'Doe',
  });

  return (
    <div>
      <p>userInfo: {JSON.stringify(userInfo)}</p>
      <button onClick={() => setUserInfo({ firstName: 'Jason' })}>Update name to Jason</button>   // here we lost lastName key
    </div>
  );
}


to solve this issue with useState we can write like

<button onClick={() => setUserInfo(prevState => ({
        ...prevState, firstName: 'Jason' }))}>
        Update name to Jason
 </button>

