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

const mapStateToProps = (state) => {
  return {
    ctr: state.counter ;  // ctr is a local prop which is mapping to counter state
  }
}

so in this case we can write our connect method as 
connect(mapStateToProps)(Login)
