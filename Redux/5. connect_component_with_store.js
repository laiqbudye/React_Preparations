we have multiple components in our app, & as redux store is central & can be accessed from anywhere from app. we need to connect our react component with redux store.

connect()

import {connect} from 'react-redux';

export default connect()(Login);

// here we need to import connect from react-redux pkg which helps us to create connection between our component & store.

connect() is a function which returns higher order component which takes component as a parameter

connect()(Login) // here connect() returns another higher order component which takes Login as a parameter.

for connect() method we need to pass mapStateToProps, mapDispatchToProps as a parameter.

mapStateToProps:
this function expects redux state as a input & then maps our components props to the state from store.

const mapStateToProps = (state) => {   // here we get access to state object using connect method
  return {
    ctr: state.counter ;  // ctr is a local prop which is mapping to counter state
  }
}

so in this case we can write our connect method as 
connect(mapStateToProps)(Login)




mapDispatchToProps:
const mapDispatchToProps = (dispatch) => {   // here we get access to dispatch method using connect method..... this is equivalent to store.dispatch that we saw in Setup_store.js
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'});
  }
}


this method can be used to dispatch actions from our component. while setting up store with node.js we dispatched an action using store.dispatch(), but in our react
component we dont have direct access to store object.

we get that access using connect method.

connect(mapStateToProps, mapDispatchToProps)(Login);

if we dont want to pass / dont have mapStateToProps then we need to pass it as null & can write like,
  
connect(null, mapDispatchToProps)(Login);














