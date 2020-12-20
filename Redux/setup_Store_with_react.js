here i am going to setup redux with react app.
redux store should be created before our app actually starts, so index.js will be the best place to do it.

index.js

import { createStore } from 'redux';
import rootReducer from './reducer';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));  // here any child of the provider component can access our store


reducer.js

const initialState = {   // default state 
  value: 0
}

const reducer = (state = initialState, action) => {       
  return state;
}

export default reducer;
