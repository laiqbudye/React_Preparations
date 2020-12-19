Switch component is from react-router-dom which is used to warp multiple Route objects & pick only one (first matched) from them.

so if there are 10 routes wrapped inside switch component and it matches pathname with 2nd route then it dont go to 3rd route, it just break the flow & come out of switch.


example without switch

<Route 
 path=”/items” 
 render={() => (<div><em>List of items</em></div>)}
/>
<Route 
 path=”/items/2" 
 render={() => (<div>Item with id of 2</div>)}
/>


so in the above example if user enters 'xyz.com/items/2' then the output will be

List of items
Item with id of 2

but the same exaple with switch

<Switch>
  <Route 
    path=”/items” 
    render={() => (<div><em>List of items</em></div>)}
  />
  <Route 
    path=”/items/2" 
    render={() => (<div>Item with id of 2</div>)}
  />
</Switch>

i/p :- 'xyz.com/items/2'
o/p will be:- List of items
here it will look for first route & if that satisfies all the conditions then it renders that component & just come out of switch

in the above example if we want to show second route then we need to write it like

<Switch>
  <Route 
    exact
    path=”/items” 
    render={() => (<div><em>List of items</em></div>)}
  />
  <Route 
    path=”/items/2" 
    render={() => (<div>Item with id of 2</div>)}
  />
</Switch>


exact will do its job here.
