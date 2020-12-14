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
