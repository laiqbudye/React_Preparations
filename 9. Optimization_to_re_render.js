As we know when state or prop changes in react the components gets re-rendered.

so in this case we can chek that if component really needs to re-render.

This check we can apply using shouldComponentUpdate in a class based component.

1. ShouldComponentUpdate(nextProps, nextState)-
this is very important lifecycle hook which decides whenther component should update or not. It allows you to cancle updating process.
this method is very useful for performance optmization.
by default it return true -> render the component
if we return false from this -> it stops updating process

e.g-
ShouldComponentUpdate(nextProps, nextState) {
  if(nextProps.person !== this.props.person){
    return true;   // it will re-render the component
  } else {
    return false;   // it wont re-render the component
  }
}


2. PureComponent - 
shouldComponentUpdate is good when we have 2 or 3 states in a component, so we can check only 2 3 states in if condition, but suppose if we have 10 12 states in a component 
then it is not efficient to chek all those props in an if condition.

in this case we can use purecomponent. we jst need to extend PureComponents class of react.

purecomponent internally implements props chek, it does shallow comparison of props and decide whether to re-render or not.


3. React.memo()
the above mentioned two methods will work in class components only, then what about functional components.
React.memo() can be used in functional components.
it’s a technique that executes a function once, saves the result in memory, and if we try to execute that function again with the same arguments 
as before, it just returns that previously saved result without executing the function again.

so same concept applies to react also, if we call a component with same props then it just returns the previous result.

memo is a higher order component provided by React that tells the component to only re-render when the props change through the concept of memoization. 

It performs shallow comparison on state & props. If we want to perform deep comparison then we can provide a function as a second arg. to memo which will contain compare logic.

e.g
  const memoizedComponent = React.memo(Component, equalityChecker);

  function equalityChecker(prevProps, nextProps) {
    return prevProps.title === nextProps.title && prevProps.movie === nextProps.movie
  }
