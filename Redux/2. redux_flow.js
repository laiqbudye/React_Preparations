Redux flow is as follows

Step 1: UI (User Interface)
This is where a change is triggered. For example, a user clicking a ‘+’ button in a simple counter app.

Step 2: Actions
The actual action we want to take place, for example, “add one”.
In Redux, actions are plain JavaScript objects, and they must have a type property (e.g. 'ADD_ONE' ).

Step 3: Reducer
It listens for all actions and changes state in response to each action.
For example, our new state should be one integer higher than our old state. 

Step 4A: Store
The store brings everything together. It holds application state, and it is where you will find three critical methods:
getState() — which allows access to the state object
dispatch(action) — which allows state to be updated
subscribe(listener) — which registers listeners, allowing code to trigger every time a change takes place
