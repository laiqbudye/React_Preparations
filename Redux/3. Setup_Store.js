Setting up redux with node.js

const redux = require('redux');   // import redux
const createStore = redux.createStore;        // this is method to create store

const initialState = {   // default state 
  value: 0
}

const rootReducer = (state = initialState, action) => {       //creating a root reducer that we need to pass when we will call createStore method
//here we can listen for actions & change state as per action
  return state;
}

//create a store
const store = createStore(rootReducer);  // it takes reducer as first param
console.log(store.getState());      // this is method to display state // o/p ->  {value: 0}

//basic store setup has been completed here


// now if we want to dispatch an action then we can dispatch it like,
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'INC_COUNTER', payload: {we can pass obj or some other data}});


//Subscribe
this function gets executed every time whenever state updates in the store

store.subscribe(() => {
  console.log('Subscription', store.getState());   
})

