reselect:-
  - is a library for creating memoized "selector" functions.
  - commonly used with redux but can be used with plane JS as well
  
  to install:- npm install reselect  (we need to install it externally in traditional redux)
  
  it is now officially added to redux toolkit pkg,
  import { createSelector } from '@reduxjs/toolkit'


to understand reselect, lets first understand what is the "selector".

selector:-
  is a function which takes redux state as an input & returns that state or some part from that state.
  
  use case:-
  as we use connect() method to connect our component with redux store, we get access to mapStateToProps & mapDispatchToProps.
  
    const mapStateToProps = (state) => {
      return {
        users: state.users.users,
        username: state.users.username,
        search: state.users.search
      }
    }
    
    
   in the above code we are mapping redux state with local props (users: state.users.users). if we have 100 components then we need to write same code again & again.
   to avoid this we can wite one single selector function & use that in all 100 components.
   
   e.g
   selectors.js
   const usersSelector = (state) => state.users.users
   
   
   app.js
   const mapStateToProps = (state) => {
    return {
      users: usersSelector(state),      // here we are making use of selector function
      username: state.users.username,
      search: state.users.search
    }
  }
   
