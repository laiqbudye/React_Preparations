redux update its store state inside reducer.

in reducer we can write switch cases for different actions & based on current action it will update the state.

switch(action.type){
  case 'INCREMENT':
    return {
      counter: state.counter + 1;
    }
}


whenever we update state inside of reducer then that state updation should be done immutably.

so first copy current state & then modify which part u want to update, then it will merge & return new object.

switch(action.type){
  case 'INCREMENT':
    return {
    ...state,
      counter: state.counter + 1;
    }
}
