middleware is a function that gets execute between action gets dispatched & reach to reducer.
basically middleware can be used to logging, crash reporting, talking to async API.

redux on its own is synchronous, then how it handles its async tasks like network requests, here middleware comes in picture.

applyMiddleware() is a function from redux that allows us to add middleware to our store. 

e.g

const store = createStore(rootReducer, applyMiddleware(middlewarename));


we can also use redux devtools chrome extention & use it as middleware for debugging purpose.

to deal with async operations/requests we need to use redux-thunk middleware. (npm i redux-thunk)

e,g
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(middlewarename, thunk));

------------------------------------------------------------------------------------------------------------------------

Action Creator is the function which returns an object which will have action type & payload.

Middleware brings an ability for an Action Creator to return a function instead of an action object. We can make an API calls from that returned function.


function fetchUsers = () => {     // action creator
  return function(dispatch){     // here thunk provides dispatch method
    axios.get("jsonplaceholder.com/api/users")
    .then((res) => {
      
      dispatch({
        type: "users_fetched_success",
        payload: res.data
      })
      
    })
  }
}
