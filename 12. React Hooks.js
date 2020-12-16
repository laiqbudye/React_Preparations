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

----------------------------------------------------------------------------------------------------------------------------------------------------------------

2. useEffect()
this hook is equivalent to componentDidMount(), componentDidUpdate(), componentWillUnmount().
The Effect Hook lets you perform side effects(sending HTTP request or some other async tasks) in function component.

By using this Hook, you tell React that your component needs to do something after render. 
React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.

e.g

import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  
  
By default useEffect() gets execute after each n every render cycle (if we dont suuply dependency array).
  
  when we provide blank dependency array in useEffect() then useEffect runs after first render only. it acts like componentDidMount in this case.
  e.g
  
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  },[]);  // will runs only once like componentDidMount


when we provide some props inside dependency array then in that case it gets re-rendered when one of the provided props gets changed.
e.g
useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  },[person, count]);  // will runs only when person or count changes


we can also return function from useEffect() which will execute when component is being unmounted from the DOM. i.e work like componentWillUnmount()
e.g 1:-
 useEffect(() => {
     // Update the document title using the browser API
    document.title = `You clicked ${count} times`;

    return () => {
      some cleanup operation
    };
  },[]);


e.g:2
useEffect(() => {
     // Update the document title using the browser API
    document.title = `You clicked ${count} times`;

    return () => {
      some cleanup operation
    };
  },[person, count]);

so in the e.g 2 when person or count change useEfect will get execute. the execution flow will be as below:-
1. while mounting or creation phase, after component gets rendered in DOM the useEfect will get execute (normal code & not return block)
2. then when something gets updated then again useEffect() will get trigger, & in this case first return block (cleanup task) from useEffect will get execute & then it 
will start executing useEffects normal code.


----------------------------------------------------------------------------------------------------------------------------------------------------------------

3.useCallback()
useCallback() often is used in conjunction with useEffect() because it allows you to prevent the re-creation of a function.

when we define a function inside another function, then when the parent function get executed the inner function also gets re-created.

so same concept applies in react like when we declare a function inside functional component then when that functional component re-renders then that inner function gets re-created.

Functions are nothing but objects in js. (referece type)

As we know that we can pass function inside dependency array of useEffect, in this case useCallback comes in picture.

e.g
const MyComponent = props => {
    const innerFunction = () => {
        // do something!
    };
 
    useEffect(() => {
        innerFunction();
        // The effect calls innerFunction, hence it should declare it as a dependency
        // Otherwise, if something about innerFunction changes (e.g. the data it uses), the effect would run the outdated version of innerFunction
    }, [innerFunction]);
};


so in the above example when innerfunction gets change then only useEffect will get execute after render. but suppose if we are doing something inside innerFunction() that 
causes state update of a component then again component gets re-render & during that re-render our innerFunction also get re-created i.e reference to that function changes,
(in JS functions are objects) . here after render when it comes to useEffect it will detect that innerFunction value is changes & it executes code inside useEffect. then again
same process will repeat. so we go in infinite loop in this scenario.

to solve above problem useCallback() comes in picture.

const MyComponent = props => {
    const innerFunction = useCallback(() => {
        // do something!
    },[]);  // dependency array just like useEffect
 
    useEffect(() => {
        innerFunction();
        // The effect calls innerFunction, hence it should declare it as a dependency
        // Otherwise, if something about innerFunction changes (e.g. the data it uses), the effect would run the outdated version of innerFunction
    }, [innerFunction]);
};


By wrapping it around a function declaration and defining the dependencies of the function, it ensures that the function is only re-created if its dependencies changed.
