reselect:-
  - is a library for creating memoized "selector" functions.
  - commonly used with redux but can be used with plane JS as well
  - this library returns createSelector function 

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
   to avoid this we can write one single selector function & use that in all 100 components.
   
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
   
 
Why Reselect:-
  to understand this lets first understand problem with normal approach.
  
  lets say we need to filter a list & return only elements based on search text
  
  e.g
  
  selectors.js

  export const usersSelector = (state) => state.users.users;

  export const filteredUsersSelector = (state) => {
      usersSelector(state).filter(user => {
          console.log("filtering users");
          return user.includes(state.users.search);
      })
  }

   
  app.js
  const mapStateToProps = (state) => {
  console.log(state)

  return {
    users: usersSelector(state),  
    username: state.users.username,
    search: state.users.search, 
    filteredUsers: filteredUsersSelector(state)    // here we are calling function from selectors.js
  }
}
  
  the problem with above approach is, whenever state updates in our app in any component, mapStateToProps gets called which then executes filteredUsers function.
  so if we are filtering a large list then to execute on every state update, it will impact on performance.
  
  
  so to address this issue "RESELECT" comes into picture.
  as definition says, it is a library for creating memoized "selector" functions.
  
  
  1. this library returns "createSelector" function. 
  2. every functions except last fucntions provided to createserver are dependencies.
  3. Reselect implements memoization pattern
  
  same e.g with reselect
  
  import { createSelector } from "reselect";

  export const filteredUsersSelector = createSelector(
    state => state.users.users,         // here users & search are deps for this func i.e when any one of them changes then it will re execute the func
    state => state.users.search,
    (users, search) => {                // here users & search coming from line 95 & 96... this sequence shoud me maintained
        return users.filter(user => {
            console.log("filtering users");
            return user.includes(search);
        })
    }
)
  
  
  app.js
  const mapStateToProps = (state) => {
    return {
      users: usersSelector(state),  
      username: state.users.username,
      search: state.users.search,
      filteredUsers: filteredUsersSelector(state)    // here we are calling reselect's func
    }
  }

So with the above approach, when users or search i.e. deps passed to func changes, then only filteredUsers func will get execute. (using memoization technique)
