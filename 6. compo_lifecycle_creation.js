// Lifecycle hooks are available only in class components.

// React hooks are available only in functional components

LIFECYCLE METHODS FOR CREATION PHASE

1. Constructor - when our code starts executing it first runs the constructor. (this is the very first block inside of the class that gets execute)
we can initialize our state inside constructor.
dont send any http request from this block.

2. getDerivedStateFromProps(props, state) 
this method introduced in React V16.3 as a replacement of componentWillReceiveProps(nextProps).
whenever the props change inside component then this method will get called. the main moto behind this method is to keep your state in sync with props.
It enables a component to update its internal state as the result of changes in props.
many people have misconception that this only get called when props change but this also get called when parent component re-renders.

3. render()
render method is a part of React-Dom Object whose task is to display react JSX on to the DOM.
Any JSX code that you write in render method is converted to React.createElement(tag, props, children) before it is rendered into the DOM.
