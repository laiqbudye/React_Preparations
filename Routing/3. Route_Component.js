Route Component

it renders the appropriate user interface when the browsers current URL match with path defined inside Route component.
The path is a prop on the <Route/> component that describes the pathname to which is show partcular component.
e.g
<Route path=”/items”/>

this route catches all the paths that starts with /items,
it can also catch /items/item1/item2  as this is starting with /items

if we want it to catch exact that staring only then we can pass "exact" in Route component

e.g

<Route path=”/items”/ exact>
so in this case it will not catch /items/item1/item2  as we have mentioned "exact".

VERY IMP:- react-router uses "Path-to-RegExp" package to convert path string(mentioned in Route component) into regular expression & compare against the current URL.




Route component provides 3 props

1. Component
2. render
3. children

1. component
we need to pass react component to this prop, so when the pathname gets matched with current URL then this component will be displayed to user.

e.g

import items from './items';

<Route 
  exact 
  path=”/items” 
  component={Items}
/>

so in the above example when user enters url like 'xyz.com/items' then Items component will be diplayed to the user.


2. render
it provides ability for inline rendering
we can also pass props to the component
whatever we write inside render prop will get execute only the current URL matches with given path.

e.g
<Route 
  exact 
  path=”/items” 
  render={() => (<div>List of Items</div>)}
/>

when user enters "xyz.com/items" then above Route will show one div containing List of Items string.


another e.g
<Route 
  exact
  path=”/items” 
  render={props => <Items {…props} />}
/>

here, we are passing props to Items component


3. children
this is same as render prop, only difference is that it gets render for every route (page) whether or not current location is same as given path.

e.g
<Route children={props => <Items {…props}/>}/>

In this case, Items component is always rendered.
