When prop or State changes then react automatically re renders the component.

the life cycle hooks sequence is as below:-

1. getDerivedStateFromProps(props, state)
this method introduced in React V16.3 as a replacement of componentWillReceiveProps(nextProps).
whenever the props change inside component then this method will get called. the main moto behind this method is to keep your state in sync with props.
It enables a component to update its internal state as the result of changes in props.
many people have misconception that this only get called when props change but this also get called when parent component re-renders.


2.shouldComponentUpdate(nextProps, nextState)
this is very important lifecycle hook which decides whenther component should update or not. It allows you to cancle updating process.
this method is very useful for performance optmization.
by default it return true -> render the component
if we return false from this -> it stops updating process


3. render()
render method is a part of React-Dom Object whose task is to display react JSX on to the DOM.
Any JSX code that you write in render method is converted to React.createElement(tag, props, children) before it is rendered into the DOM.
dont send any http requets or set any timeout inside render method which will delay our render process.
if there are any other child components called inside render method, then those components lifecycle methods executes completely then again flow come back to parent 
components render method.

when re-redering happens it does touch actual DOM, instead it changes in react's virtual DOM which then chek & updates actual DOM.


4. getSnapshotBeforeUpdate(prevProps, prevState)
it takes 2 parameters, previous props & previous state as an input and return a snapshot object to which we can freely configure.
we dont use this method often.
We can use it to get current scrolling position of user before update, then after component updation we can restore user to that scrollling position.


5. componentDidUpdate()
this is the lifecycle hook which indicates that the component updation has been completed.
We can make an API call from this hook. e.g fetching data from DB.
VERY IMP:- dont call setstate directly(synchronously) in this method which will again re render the page & can go in infinite loop of re rendering.


